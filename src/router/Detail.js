import React,{Component} from 'react';

class Detail extends Component {
   componentDidMount() {
        const {location,history} = this.props;
        console.log(location);
        if(location.state===undefined) {
            history.push("/");
        }
   }
   render() {
       const {location} = this.props;
       if(location.state) {
           const {title,year,summary} = location.state;
       return (<div id="details">
       <span>{title}</span>
        <span>{year}</span>
        <span>{summary}</span>
        </div>);
       } else {
           return null;
       }
   }
}
export default Detail;