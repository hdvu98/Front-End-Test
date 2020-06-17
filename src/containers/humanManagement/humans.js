import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import {Container} from 'react-bootstrap';
import './styles.scss';
import {CustomTable} from '../../components/table';
import {getHumans} from '../../services/humansService';
import {Level} from '../../components/level';
class Humans extends Component {
    constructor(props){
        super(props)
        this.state = {
            humans: [],
            page: 1,
            limit: 5,
        }
    }
    componentDidMount(){
        getHumans().then(res => this.setState({humans: res.data}))
        
    }
    handleEdit = (row) =>{
        alert(`handleEdit(id: ${row.id})`)
    }
    handleDelete = (row) => {
        alert(`handleDelete(id: ${row.id})`)
    }
    render() {
        const { humans } = this.state;
        const columns = [
            {
                key: 'id',
                name: '#',
                position: 'center',
                width: '100px',
            },
            {
                key: 'name',
                name: 'Name'
            },
            {
                key: 'point',
                name: 'Point',
                position: 'right',
                render: (point) => <span style={{color: point >=0 ? 'black' : 'red'}}>{point}</span>
            },
            {
                key: 'level',
                name: 'Level',
                position: 'center',
                render: (level)=> {
                    return <Level maxLevel={10} currentLevel={level}/>
                }
            },
            {
                key: 'star',
                name: 'Star',
                position: 'center',
                render: (star) => {
                    return (
                        <div className="star">
                        <StarRatings
                        rating={star || 0}
                        starRatedColor="#FFCD02"
                        numberOfStars={5}
                        name='rating'
                        starDimension="1rem"
                        starSpacing="4px"
                        />
                        </div>
                    )
                }
            }
            ,
            {
                key: 'action',
                name: 'Action',
                position: 'center',
                render: (_,row) => {
                    return <div className="btn-actions">
                        <div>                        
                            <button className="btn btn-edit my-btn" onClick={()=>this.handleEdit(row)}><i className="fa fa-pen"></i></button>
                        </div>
                        <div>
                            <button className="btn btn-danger my-btn" onClick={()=>this.handleDelete(row)}><i className="fa fa-trash-alt"></i></button>
                        </div>
                    </div>
                }
            }

        ]
        return (
            <div style={{
                minHeight: '100vh',
                padding: '100px 0',
                background: 'white',
                display: 'felx',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Container>
                    <CustomTable onCreate={() => alert('handlerAdd')} 
                    header={"Stage 1"} 
                    columns={columns} 
                    data={humans} 
                    />
                </Container>
            </div>
        )
    }
}
export default Humans;