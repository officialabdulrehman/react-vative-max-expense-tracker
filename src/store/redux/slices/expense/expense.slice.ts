import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AddExpense, Expense, RemoveExpense, UpdateExpense } from "./Expense.model"

type State = {
  expenses: Expense[]
}

const initialState: State = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19").toString(),
    },
    {
      id: "e2",
      description: "A PS5",
      amount: 999.99,
      date: new Date("2022-01-05").toString(),
    },
    {
      id: "e3",
      description: "A dosen bananas",
      amount: 1.99,
      date: new Date("2021-12-01").toString(),
    },
    {
      id: "e4",
      description: "A book",
      amount: 9.99,
      date: new Date("2022-02-19").toString(),
    },
    {
      id: "e5",
      description: "Udemy Course",
      amount: 18.99,
      date: new Date("2022-02-18").toString(),
    },
    {
      id: "e6",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19").toString(),
    },
    {
      id: "e7",
      description: "A PS5",
      amount: 999.99,
      date: new Date("2022-01-05").toString(),
    },
    {
      id: "e8",
      description: "A dosen bananas",
      amount: 1.99,
      date: new Date("2021-12-01").toString(),
    },
    {
      id: "e9",
      description: "A book",
      amount: 9.99,
      date: new Date("2022-02-19").toString(),
    },
    {
      id: "e10",
      description: "Udemy Course",
      amount: 18.99,
      date: new Date("2022-02-18").toString(),
    },
  ]
}

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, { payload: { amount, date, description } }: PayloadAction<AddExpense>) => {
      const expense: Expense = {
        id: new Date().toISOString() + Math.random().toString(),
        amount,
        date,
        description
      }
      state.expenses.push(expense)
    },
    removeExpense: (state, { payload: { id } }: PayloadAction<RemoveExpense>) => {
      state.expenses.filter((expense: Expense) => expense.id !== id)
    },
    updateExpense: (state, { payload: { id, amount, date, description } }: PayloadAction<UpdateExpense>) => {
      const index = state.expenses.findIndex((expense: Expense) => expense.id === id)
      state.expenses[index] = {
        ...state.expenses[index],
        amount, date, description
      }
    },
  }
})

export const expenseReducer = expenseSlice.reducer
export const { addExpense, removeExpense, updateExpense } = expenseSlice.actions