import PropTypes from 'prop-types';
import StatisticCard from 'components/StatisticCard/StatisticCard';
export default function Statistics({title, statistics}){
    return(
        
    <section className="statistics">
    <h2 className="title">{title}</h2>

    <ul className="stat-list">
        {statistics.map(({id, label, percentage}) =>(
            <StatisticCard 
            key={id}
            label = {label}
            percentage = {percentage} />
        ))}
    </ul>
    </section>
    )
}

Statistics.prototype = {
    statistics: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}
