SuperHeroPage = React.createClass({
	loadSuperHero: function(){

		$.ajax({
			method: "GET",
			url: "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+ this.state.alpha +"&limit=100&apikey=ecf1e6833d89e1e04546d2970ea67cc3",
			success: function(data){
				this.setState({data: data.data.results});
				console.log(this.state.data);
			}.bind(this),
			error: function(xhr, status, err){
				console.log(status, err.toString());
			}.bind(this)
		})
	},
	
	componentDidMount: function(){
		this.loadSuperHero();
	},
	
	getInitialState: function(){
		return{
			data: [],
			alpha: "e"
			}
	},
	
	handleSubmit: function(e){
		e.preventDefault();
		this.setState({alpha: e.target.value})
		console.log(this.state.alpha);
		this.loadSuperHero(this.state.alpha);
	
	},
	render: function(){
		return (
			<div>
				
				<h3>Search:</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text"></input>
					<input type="submit"></input>
				</form>

				<HeroList
					data={this.state.data}
				/>
			</div>
		);
	}
});