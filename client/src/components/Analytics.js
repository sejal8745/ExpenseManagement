import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransaction }) => {
  //categorywise

  const categories = [
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "medical",
    "shopping",
    "fee",
    "bills",
    "tax",
  ];
  //total transactions
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransaction = allTransaction.filter(
    (transaction) => transaction.type === "expense"
  );
  const totalIncomePercent =
    (totalIncomeTransaction.length / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransaction.length / totalTransaction) * 100;

  //total turn over
  //reduce provide accumulator
  //acc = accumulator
  const totalTurnover = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnover = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransaction
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverpercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverpercent =
    (totalExpenseTurnover / totalTurnover) * 100;
  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-4">
          <div className="card mb-3">
            <div className="card-header">
              Total Transactions : {totalTransaction}
            </div>
            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="card-body"
            >
              <h5 className="text-success">
                Income : {totalIncomeTransaction.length}
              </h5>
              <h5 className="text-danger">
                Expense : {totalExpenseTransaction.length}
              </h5>
            </div>
            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="pb-3"
            >
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomePercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpensePercent.toFixed(0)}
              />
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-header">
                Total Turnover : {totalTurnover}
              </div>
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="card-body"
              >
                <h5 className="text-success">Income : {totalIncomeTurnover}</h5>
                <h5 className="text-danger">
                  Expense : {totalExpenseTurnover}
                </h5>
              </div>
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="pb-3"
              >
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomeTurnoverpercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpenseTurnoverpercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h5>Categorywise Income</h5>

          {categories.map((cate) => {
            const amount = allTransaction
              .filter(
                (transaction) =>
                  transaction.type === "income" && transaction.category === cate
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="card mb-1">
                  <div className="card-body p-2">
                    <h6>{cate}</h6>
                    <Progress
                      percent={((amount / totalIncomeTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="col">
          <h4>Categorywise Expense</h4>
          {categories.map((cate) => {
            const amount = allTransaction
              .filter(
                (transaction) =>
                  transaction.type === "expense" &&
                  transaction.category === cate
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="card mb-1">
                  <div className="card-body p-2">
                    <h6>{cate}</h6>
                    <Progress
                      percent={((amount / totalExpenseTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Analytics;
