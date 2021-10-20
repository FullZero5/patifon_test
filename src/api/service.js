import HTTP from './fetch';

const getUrl = () => 'http://localhost:8015/api';
const getData = (url, option) => HTTP(`${getUrl()}${url}`, option);

const ApiService = () => {
  return {
    async getPrograms() {
      const programs = await getData(`/programs`);
      return programs
    },
    async getUsers() {
      const user = await getData(`/user`);
      return user
    },
    async getTask(page = 1, limit = 50) {
      const task = await getData(`/task?_page=${page}&_limit=${limit}`);
      return task
    },
    async getIssue(page = 1, limit = 50) {
      const issue = await getData(`/issue?_page=${page}&_limit=${limit}`);
      return issue
    },
    async getItem(url, id) {
      const item = await getData(`/${url}/${id}`);
      return item
    },
    async saveItem(url, id, data) {
      const newItem = await getData(`/${url}/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return newItem
    }
  };
}

export default new ApiService();
