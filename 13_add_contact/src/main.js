
var Page = React.createClass({
    getInitialState: function(){
        return{data:[
            {id:"1",name:"Maria",email:"maria@mail.com",subject:"R",messenger:"My messenger test 1.."},
            {id:"2",name:"Pedro",email:"pedro@mail.com",subject:"A",messenger:"My messenger test 2.."}
        ]}
    },

    handleContactSubumit: function(contact){
        console.log(contact);
        var newContacts = this.state.data.concat([contact]);
        this.setState({data: newContacts});
    },

    render: function(){
        return (
            <myElement>
                <Nav title="React" linkUrl="index.html" />
                <div className="container">
                    <Title>
                        My component title!
                    </Title>

                    <div className="row">
                        <Form onContactSubumit={this.handleContactSubumit} idNumber={this.state.data.length + 1} />
                    </div>
                    <div className="row">
                        <List data={this.state.data} />
                        <br/><br/><br/>
                    </div>

                </div>
            </myElement>
        );
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);
