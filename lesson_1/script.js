const employees = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const courseName = 'Базовый React';

const data = {
	modules: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const {modules, react: [jsx, ...topics], add} = data;

const getTeam = employees => {
	team = []
	employees
		.map(employee => employee.trim())
		.filter(employee => employee.length > 0)
		.map(employee => 
			team.push(employee.charAt(0).toUpperCase() + employee.slice(1).toLowerCase()));
	return team;
};

const getTopics = (jsx, topics, add) => {
	allTopics = '' + jsx;
	topics.map(topic => allTopics += ` ${topic}`);
	add.map(add => allTopics += ` ${add}`)
	return allTopics;
};

const calcModules = modules => 
	modules.reduce((prev, curr) => prev + curr);

const getCourseInfo = (director, lessons, team, course, teacher = 'Максим') => {
	console.log(`
	Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${lessons}.
	Команда Академии:${team.map(employee => ` ${employee}`)}
	Первое, что изучим, будет ${jsx}. Он очень похож на HTML!
	Технологии, которые мы изучим:
	${getTopics(jsx, topics, add)} и другие.`)
}

getCourseInfo('Артем', calcModules(modules), getTeam(employees), courseName);
