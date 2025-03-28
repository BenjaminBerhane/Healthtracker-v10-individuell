import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeightProgressChart = ({ weightData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Viktutveckling</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart className= "justify-start" data={weightData}>
            <XAxis dataKey="date" stroke="black" />
            <YAxis domain={["dataMin - 2", "dataMax + 2"]} stroke="black" />
            <Tooltip />
            <Line type="monotone" dataKey="weight" className="stroke-primary" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WeightProgressChart;
