import { Request, ResponseToolkit } from '@hapi/hapi'
import response from '../utils/response'
import { allEmployeesDetails, AddEmployee } from '../services/employee.service'
import { Employee } from '../types/employee'


export const employeeController = async (request: Request, h: ResponseToolkit): Promise<any> => {
    switch (request.method) {
        case 'get': {
            const allEmployees = await allEmployeesDetails().then((results) => results);
            return h.response(response(
                200,
                allEmployees
            ))
        }
        case 'post': {
            const results: any = await AddEmployee(request.payload as Employee).then((result) =>result, (error) =>  error)            
            return h.response(response(
                results.errno ? 500 : 200,
                results
            ))
        }
    }
}
