import PropTypes from 'prop-types';
export default function StatisticCard({label, percentage}){
    return(
        <li class="item">
            <span class="label">.docx</span>
            <span class="percentage">4%</span>
        </li>
    )
}
StatisticCard.PropTypes  ={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}