import PropTypes from 'prop-types';
import StatisticCard from 'components/StatisticCard/StatisticCard';
export default function Statistics({title, statistics = []}){
    return(
        
    <section class="statistics">
    <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
        {statistics.map(statistic =>(
            <StatisticCard key={statistic.id} />
        ))}
    </ul>
    </section>
    )
}

Statistic.protoTypes = {

}