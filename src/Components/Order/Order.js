export default class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: {
                id: 0,
                userid: 0,
                order: '',
                status: '',
                date: '',
                datecompleted: '',
            },

            user: {
                userid: '',
                name: '',
                email: '',
                phone:'',
            },

            error: null,
            isLoading: true,
            showModal: false
        }
    }

    fetchorder = (orderid) => {
        this.setState({
            orders: [
                { id: 1, userid: 1, order: 'Malta', status: 'Completed', date: "2/1/2020", datecompleted: "5/1/2020" },
                { id: 2, userid: 2, order: 'Aland Islands', stats: 'Pending', date: "2/1/2020", datecompleted: "" },
                { id: 3, userid: 1, order: 'Albania', staus: 'Completed', date: "2/1/2020", datecompleted: "6/1/2020" }
            ]
        });
    }

    fetchuser = (userid) => {
        let users = [{ id: 1, username: "Mike" }, { id: 2, username: "John" }, { id: 3, username: "Ryan" }]
        let founduser = { id: 0, username: "" };
        users.map(user => {
            if (user.id === userid) {
                console.log(user);
                founduser.id = user.id;
                founduser.username = user.username;
            }
            return founduser;
        })

    }

    generateorderlist = () => {
        if (this.state.orders.map !== 0) {
            this.state.orders.map(order => {
                return (
                    <p>
                        <a href={"/order/" + order.id} alt={order.id} className={order.status} key={order.id}> {order.userid + '-' + order.date} </a>
                    </p>
                )
            })
        }
        this.setState({ isLoading: false });
    }


    componentDidMount() {
        this.fetchorder()
        while (this.state.order.userid !== '') {
            this.fetchuser(this.state.order.userid)
        }
    }

    render() {
        return (

            <div className="white">
                <div className="column center">
                    <div className="row center">
                        <div className="col-1">
                            {this.state.order.id}
                        </div>
                        <div className="col-1">
                            {fetchuser(this.state.order.u}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}