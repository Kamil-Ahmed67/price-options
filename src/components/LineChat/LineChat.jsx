import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChat = () => {
    const studentMarksData = [
        { id: 1, student: "Alice", math: 85, physics: 78, chemistry: 90 },
        { id: 2, student: "Bob", math: 78, physics: 82, chemistry: 88 },
        { id: 3, student: "Charlie", math: 92, physics: 91, chemistry: 95 },
        { id: 4, student: "David", math: 88, physics: 76, chemistry: 84 },
        { id: 5, student: "Eva", math: 76, physics: 80, chemistry: 78 },
        { id: 6, student: "Frank", math: 95, physics: 92, chemistry: 89 },
        { id: 7, student: "Grace", math: 89, physics: 85, chemistry: 87 },
        { id: 8, student: "Hannah", math: 84, physics: 79, chemistry: 83 },
        { id: 9, student: "Isaac", math: 91, physics: 93, chemistry: 90 },
        { id: 10, student: "Jack", math: 73, physics: 75, chemistry: 80 }
      ];
      

    return (
        <div>
            <LChart width={500} height={400} data={studentMarksData}>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'physics'} stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChat;