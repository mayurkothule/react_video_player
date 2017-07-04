import React,{Component} from 'react';

/*const SearchBar=()=>{
	return <input/>;};*/
	class SearchBar extends Component{

		constructor(props){
			super(props);
			this.state={term:' '};
		}

		render(){
			return(
				<div className="search-bar">
				  <input onKeyPress={event=>this.enterKey(event)} ref="newText"/>
			    </div>
			);
		}

		enterKey(e)
		{
			//var unicode=e.keyCode? e.keyCode : e.charCode
			//alert(unicode);
			//alert(String.fromCharCode(event.which));

			if (e.charCode==13){
				//alert("hiii");
				var txt=this.refs.newText.value
				//alert(txt);
				this.setState({txt});
			    this.props.onSearchTermChange(txt);
				///onInputChange(txt);
			}
		}

		onInputChange(term){
			this.setState({term});
			this.props.onSearchTermChange(term);
		}

};

export default SearchBar;