export type Expense = {
  id: string,
  description: string,
  amount: number
  date: string
}

export type AddExpense = {
  description: string,
  amount: number
  date: string
}

export type RemoveExpense = {
  id: string
}

export type UpdateExpense = {
  id: string,
  description: string,
  amount: number
  date: string
}
