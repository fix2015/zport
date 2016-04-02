var React = require('react');


var SearchComponent = React.createClass({

  getInitialState () {
    var filter ={
        type: '',
        distance: '',
        toilet: '',
        tv: '',
        refrigeter: '',
        conditioner: '',
        wifi: '',
        eat: '',
        children: ''
    }
    this.props.onFilter(filter);
    return {
      type: 'chast',
      distance: '100',
      toilet: 'true',
      tv: 'true',
      refrigeter: 'true',
      conditioner: 'true',
      wifi: 'true',
      eat: 'true',
      children: 'true'
    };
  },
  pushToFilter(){
		var filter ={
		      type: this.state.type,
		      distance: this.state.distance,
		      toilet: this.state.toilet,
		      tv: this.state.tv,
		      refrigeter: this.state.refrigeter,
		      conditioner: this.state.conditioner,
		      wifi: this.state.wifi,
		      eat: this.state.eat,
		      children: this.state.children
		    };
    this.props.onFilter(filter);
  },
  onTypeChanged(e) {
	    this.setState({
			type: e.currentTarget.value
		});
        var self=this;
        setTimeout(function(){
            self.pushToFilter();
        },200)

  },
  onDistanceChanged(e) {
        this.setState({
        	distance: e.currentTarget.value
        });
        var self=this;
        setTimeout(function(){
            self.pushToFilter();
        },200)
  },
  onToiletChanged(e) {
    this.setState({
      toilet: e.currentTarget.value
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onTvChanged(e) {
    this.setState({
      tv: e.currentTarget.value
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onRefrigeterChanged(e) {
    this.setState({
      refrigeter: e.currentTarget.value
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onConditionerChanged(e) {
    this.setState({
      conditioner: e.currentTarget.value
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onWifiChanged(e) {
    this.setState({
      wifi: e.currentTarget.value
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onEatChanged(e) {
    this.setState({
      eat: e.currentTarget.value
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onChildrenChanged(e) {
    this.setState({
      children: e.currentTarget.value
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
	render() {
		var params = this.state;
		var resultRows = this.props.data.map(function(result){
            var type=''
            switch (result.type){
                case 'chast':
                    type = 'Частный сектор'
                    break;
                case 'pansionat':
                    type = 'Пансионат'
                    break;
                case 'snatotiy':
                    type = 'Отель'
                    break;
                case 'chast':
                    type = 'Санаторий'
                    break;
                case 'hotel':
                    type = 'Готель'
                    break;
                default :
                    type = 'Частный сектор'
            }
			return (
	             <tbody>
	                    <tr>
	                        <td>
		                        <label className={params.type == result.type? 'btn btn-default active' : 'btn btn-default' }>
		                        	<input type="radio" 
		                        		   name="type" 
		                                   value={result.type} 
		                                   className={params.type == result.type? 'hide' : 'hide' }
		                                   checked={params.type == result.type} 
		                                   onChange={this.onTypeChanged} />
                                  <span >{type}</span>
	 							</label>
                           </td>
 	                        <td>
 	                        	<label className={params.distance == result.distance? 'btn btn-default active' : 'btn btn-default' }>
 	                        	<input type="radio" name="distance" 
	                                   value={result.distance}  
	                                   className={params.distance == result.distance? 'hide' : 'hide' }
	                                   checked={params.distance == result.distance} 
	                                   onChange={this.onDistanceChanged} />
 									<span >{result.distance}</span>
	 							</label>
                           </td>
	                        <td>
	                        	<div className={result.toilet ? 'show' : 'hide'}>
		                       	    <label className={params.toilet == result.toilet? 'btn btn-default active' : 'btn btn-default'}>
	                        		<input type="radio" name="toilet" 
		                                   value={result.toilet}  
		                                   checked={params.toilet == result.toilet} 
		                                   className={params.toilet == result.toilet? 'hide' : 'hide' }
		                                   onChange={this.onToiletChanged} />
										<span >{result.toilet}</span>
		 							</label>
	 							</div>
                           </td>
   	                        <td>
   	                        	<div className={result.tv ? 'show' : 'hide'}>
	   	                        	<label className={params.tv == result.tv? 'btn btn-default active' : 'btn btn-default' }>
	                        		<input type="radio" name="tv" 
		                                   value={result.tv}  
		                                   checked={params.tv == result.tv} 
		                                   className={result.tv ? 'hide' : 'hide' }
		                                   onChange={this.onTvChanged} />
										<span >{result.onTvChanged}</span>
		 							</label>
	 							</div>
                           </td>
   	                        <td>
   	                        	<div className={result.refrigeter ? 'show' : 'hide'}>
	  								<label className={params.refrigeter == result.refrigeter? 'btn btn-default active' : 'btn btn-default' }>
	                        		<input type="radio" name="refrigeter" 
		                                   value={result.refrigeter}  
		                                   checked={params.refrigeter == result.refrigeter} 
		                                   className={result.refrigeter ? 'hide' : 'hide' }
		                                   onChange={this.onRefrigeterChanged} />
										<span >{result.onRefrigeterChanged}</span>
		 							</label>
	 							</div>
                           </td>
   	                        <td>
   	                        	<div className={result.conditioner ? 'show' : 'hide'}>
									<label className={params.conditioner == result.conditioner? 'btn btn-default active' : 'btn btn-default' }>
	   	                        	<input type="radio" name="conditioner" 
		                                   value={result.conditioner}  
		                                   checked={params.conditioner == result.conditioner} 
		                                   className={result.conditioner ? 'hide' : 'hide' }
		                                   onChange={this.onConditionerChanged} />
										<span >{result.onConditionerChanged}</span>
		 							</label>
	 							</div>
                           </td>
   	                        <td>
   	                       	 	<div className={result.wifi ? 'show' : 'hide'}>
	 								<label className={params.wifi == result.wifi? 'btn btn-default active' : 'btn btn-default' }>
	   	                        	<input type="radio" name="wifi" 
		                                   value={result.wifi}  
		                                   checked={params.wifi == result.wifi} 
		                                   className={result.wifi ? 'hide' : 'hide' }
		                                   onChange={this.onWifiChanged} />
										<span >{result.onWifiChanged}</span>
		 							</label>
	 							</div>
                           </td>
   	                        <td>
   	                        	<div className={result.eat ? 'show' : 'hide'}>
	   	                        	<label className={params.eat == result.eat? 'btn btn-default active' : 'btn btn-default' }>
	   	                        	<input type="radio" name="eat" 
		                                   value={result.eat}  
		                                   checked={params.eat == result.eat} 
		                                   className={result.eat ? 'hide' : 'hide' }
		                                   onChange={this.onEatChanged} />
										<span>{result.onEatChanged}</span>
		 							</label>
	 							</div>
                           </td>
  	                        <td>
  	                       		<div className={result.children ? 'show' : 'hide'}>
	  	                        	<label className={params.children == result.children? 'btn btn-default active' : 'btn btn-default' }>
	  	                        	<input type="radio" name="children" 
		                                   value={result.children}  
		                                   checked={params.children == result.children} 
		                                   className={result.children ? 'hide' : 'hide' }
		                                   onChange={this.onChildrenChanged} />
										<span >{result.onChildrenChanged}</span>
		 							</label>
	 							</div>
                           </td>
	                    </tr>
                 </tbody>
               );
		}, this);
		return (
 				<table className="table">
                   <thead>
                       <tr>
                           <th>Тип</th>
                           <th>Дистанция</th>
                           <th>Удобвства</th>
                           <th>Телевизор</th>
                           <th>Холодильник</th>
                           <th>Кондиционер</th>
                           <th>wifi</th>
                           <th>Питания</th>
                           <th>Детская площадка</th>
                       </tr>
                   </thead>
                    {resultRows}
                </table>
		);
	}
});

module.exports = SearchComponent;

/*
<tfoot>
    <tr>
        <td>chosen site name {this.state.type} </td>
        <td>chosen distance {this.state.distance} </td>
        <td>chosen toilet {this.state.toilet} </td>
        <td>chosen tv {this.state.tv} </td>
        <td>chosen refrigeter {this.state.refrigeter} </td>
        <td>chosen conditioner {this.state.conditioner} </td>
        <td>chosen wifi {this.state.wifi} </td>
        <td>chosen eat {this.state.eat} </td>
        <td>chosen children {this.state.children} </td>
    </tr>
</tfoot>*/
