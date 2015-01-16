/*react test doc*/

//set object
var Photo = React.createClass ({


	//define state object
	toggleLiked: function() {
		this.setState({
			liked: !this.state.liked
		});
	},

	//called when component is initialized
	getInitialState: function() {
		return {
			liked: false
		}
	},

	//define render object
	render: function() {
		var buttonClass = this.state.liked ? 'active' : '';

		return (
			<div className='photo'>
				<img src={this.props.src} />
				<div className='photo__meta'>
					<div onClick={this.likeCount} className='photo__like-count'>
						{this.props.likeCounter}
					</div>
					<button onClick={this.toggleLiked} className={buttonClass}>
						♥
					</button>
					
					<span>{this.props.caption}</span>
					<span>{this.props.location}</span>
					<span>{this.props.year}</span>
				</div>

			</div>
			)
		}
});

var PhotoGallery = React.createClass({

	getDataFromServer: function() {
		return [{
			url: 'http://tinyurl.com/lkevsb9',
			caption: 'New York!'
		},
		{
			url: 'http://tinyurl.com/mxkwh56',
			caption: 'Cows'
		},
		{
			url: 'http://tinurl.com/nc7jv28',
			caption: 'Scooters'
		}
		];
	},

	render: function() {
		var data = this.getDataFromServer();

		var photos = data.map(function(photo) {
			return <Photo src={photo.url} caption={photo.caption} />
		});

		return (
			<div className='photo-gallery'>
				{photos}
			</div>
		)
	}

});

React.render(<PhotoGallery />, document.body);

//render virtual element in dom node
//React.render(<Photo src='http://brendanbruce.com/images/home/bike.png' caption='bike' location='New York' year='2015' likeCounter='0' />, document.body);