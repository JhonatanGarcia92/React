var Nav = React.createClass({
    render:function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            React
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});


ReactDOM.render(
    <Nav />,
    document.getElementById('app')
);