import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
const Chart = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={props.data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[160, 'auto']} />
          <Tooltip />
          <Area type="monotone" dataKey="avgPowerFactor" stroke="#87CEEB" fill="#87CEEB" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};