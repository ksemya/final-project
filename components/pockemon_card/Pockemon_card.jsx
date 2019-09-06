import './Pockemon_card.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { CatchButtonContainer } from '../../containers/CatchButtonContainer'

export function Pockemon_card(props){
        const { id, name, img } = props;
        console.log(img);
        return (
                <section className="card">
                    <Link to={`/pokemon/${id}`}><img className="card__image" src={img}/></Link>
                    <div className="card__text">
                        <Link to={`/pokemon/${id}`}><span>{ name }</span></Link>
                        <CatchButtonContainer id={id} name={name} img={img}/>
                    </div>
                </section>
        )

}