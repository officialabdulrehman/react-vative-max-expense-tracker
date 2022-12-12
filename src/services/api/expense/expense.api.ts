import { SERVER_URL } from "../../../config/env"
import { api } from "../../../lib/api/api.base"
import { Expense } from "../../../store/redux/slices/expense/Expense.model"

class ExpenseApi {

  public create(data: any) {
    const result = api.post(`${SERVER_URL}/expenses.json`, data, {})
    return result
  }

  public async list(data?: any) {
    const { data: result } = await api.get(`${SERVER_URL}/expenses.json`, {})
    return this.transformData(result)
  }

  private transformData(data: any) {
    const result: Expense[] = []
    for (const key in data) {
      result.push({
        id: key,
        amount: data[key].amount,
        date: new Date(data[key].date).toISOString(),
        description: data[key].description,
      })
    }
    return result
  }
}

export const expenseApi = new ExpenseApi()