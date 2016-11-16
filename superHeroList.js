SuperHeroPage = React.createClass({
	loadSuperHero: function(){
		$.ajax({
			method: "GET",
			url: "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=ecf1e6833d89e1e04546d2970ea67cc3",
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
			data: []
			}
	},
	render: function(){
		return (
			<HeroList
				data={this.state.data}
			/>
		);
	}
});