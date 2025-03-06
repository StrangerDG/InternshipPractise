import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const TaskChart: React.FC = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('taskChart'));
    const option = {
      title: { text: 'Task Overview', left: 'center' },
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: 3, name: 'To Do' },
            { value: 2, name: 'In Progress' },
            { value: 1, name: 'Completed' },
          ],
        },
      ],
    };
    
    return () => chart.dispose();
  }, []);

  return <div id="taskChart" style={{ height: '300px' }}></div>;
};

export default TaskChart;