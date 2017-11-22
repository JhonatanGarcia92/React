var data = [
    {id:"1",name:"Maria",email:"maria@mail.com",subject:"R",messenger:"My messenger test 1.."},
    {id:"1",name:"Pedro",email:"pedro@mail.com",subject:"A",messenger:"My messenger test 2.."}
];

var Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <Nav title="React" linkUrl="index.html" />
                <div className="container">
                    <Title>
                        My component title!
                    </Title>

                    <div className="row">
                        <Form />
                        <Button textActive="Loading..">Send</Button>
                    </div>
                    <div className="row">
                        <List data={data} />
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
