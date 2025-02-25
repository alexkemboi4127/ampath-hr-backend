import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { AllUsersAndRoles } from '../services/user.service';

const userRoleController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  const userName = request.query.user
  const userAndRoles: any = await AllUsersAndRoles(userName).then(
    (results) => results,
    (error) => error)
  return h.response(response(!userAndRoles.length ? 500 : 200, userAndRoles)).code(!userAndRoles.length ? 500 : 200);
};
export default userRoleController;