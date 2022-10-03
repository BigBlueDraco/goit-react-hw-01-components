import PropTypes from 'prop-types';
import StatisticCard from 'components/StatisticCard/StatisticCard';
import css from "./statistics.module.css"
export default function Statistics({title, statistics}){
    return(
        
    <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statList}>
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
