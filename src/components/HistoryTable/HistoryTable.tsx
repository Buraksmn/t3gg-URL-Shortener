import { api } from "@app/utils/api";
import { Box, Heading, Table } from "@radix-ui/themes";
import moment from "moment";
import React from "react";

const HistoryTable: React.FC = ({}) => {
  const { data } = api.example.hello.useQuery();
  return (
    <Box
      style={{
        backgroundColor: "var(--gray-a2)",
      }}
      p={"5"}
    >
      <Heading mb={"4"}>Last Created List</Heading>
      <Table.Root variant="ghost">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Short Link</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Original Link</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Clicks</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Generate Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data?.map((item, index) => {
            console.log("item", item);
            return (
              <Table.Row key={index}>
                <Table.RowHeaderCell>
                  <a href={window.location.origin + item.shortLink}>
                    {window.location.origin}
                    {item.shortLink}
                  </a>
                </Table.RowHeaderCell>
                <Table.Cell>{item.originalLink}</Table.Cell>
                <Table.Cell>{item.clicl}</Table.Cell>
                <Table.Cell>
                  {moment(item.date as Date).format("MM/DD/YYYY : HH:mm")}{" "}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
export default HistoryTable;
