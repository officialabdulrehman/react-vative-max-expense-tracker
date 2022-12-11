import { SERVER_URL } from "../../../config/env"
import { api } from "../../../lib/api/api.base"

class ExpenseApi {
  public create(data: any) {
    const result = api.post(`${SERVER_URL}/expenses.json`, data, {})
    return result
  }
}

export const expenseApi = new ExpenseApi()