SuperHeroPage = React.createClass({
	loadSuperHero: function(x){
		$.ajax({
			method: "GET",
			url: "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+ x +"&limit=100&apikey=ecf1e6833d89e1e04546d2970ea67cc3",
			success: function(data){
				this.setState({data: data.data.results});
				console.log("I just GOT some heros")
			}.bind(this),
			error: function(xhr, status, err){
				console.log(status, err.toString());
			}.bind(this)
		})
	},
	
	componentDidMount: function(){
		this.loadSuperHero(this.state.alpha);
	},
	
	getInitialState: function(){
		return{
			data: [],
			alpha: "A"
			}
	},
	handleChange: function(){
		this.setState({alpha: this.refs.term.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.loadSuperHero(this.state.alpha);
	},
	render: function(){
		return (
			<div>
				
				
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type="text" ref="term"></input>
					<input type="submit"></input>
				</form>

				<HeroList
					data={this.state.data}
				/>
			</div>
		);
	}
});