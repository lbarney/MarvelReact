HeroList = React.createClass({
	render: function(){
		var heroNode = this.props.data.map(function(index){
			return(
				<div key={index.id} className="card">
					
					<h1>{index.name}</h1><br/>
					<p>{index.description}</p>
					<img src={index.thumbnail.path + "." + index.thumbnail.extension}/>
				</div>
			);
		});
		return (
			<div className="container">
				{heroNode}
			</div>
		);
	}
});


