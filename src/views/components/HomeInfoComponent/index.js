import React from 'react';
import './style.css';
import {
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button
} from 'react-toolbox';

export const HomeInfoComponent = (props) => {
    return (
        <Card style={{ width: '350px' }}>
            <CardTitle
                title={props.title}
            />
            <CardText>{props.subtitle}</CardText>
            <CardActions>
                <Button label={props.ctaText} onClick={props.ctaAction} />
            </CardActions>
        </Card>
    );
}