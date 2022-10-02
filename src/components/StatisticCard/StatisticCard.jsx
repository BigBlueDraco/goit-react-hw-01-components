import PropTypes from 'prop-types';
export default function StatisticCard({label, percentage}){
    return(
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    )
}
StatisticCard.protoTypes  ={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}