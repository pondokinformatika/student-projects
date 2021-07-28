document.addEventListener('alpine:init', () => {
	Alpine.data('main', () => {
		const data = {
			students: [
				{ name: 'muji', projects: [
					{ name: 'E Learning', path: 'e-learning', image: 'https://profesi-unm.com/wp-content/uploads/2020/03/ewww.jpg' }
				]}, 
				{ name: 'abdu', projects: [
					{ name: 'E Learning', path: 'e-learning', image: 'https://profesi-unm.com/wp-content/uploads/2020/03/ewww.jpg' }
				]}, 
				{ name: 'fatra', projects: [
					{ name: 'E Learning', path: 'e-learning', image: 'https://profesi-unm.com/wp-content/uploads/2020/03/ewww.jpg' }
				]}, 
				{ name: 'hudzaifah', projects: [
					{ name: 'E Learning', path: 'e-learning', image: 'https://profesi-unm.com/wp-content/uploads/2020/03/ewww.jpg' }
				]}, 
				{ name: 'ramadhan', projects: [
					{ name: 'E Learning', path: 'e-learning', image: 'https://profesi-unm.com/wp-content/uploads/2020/03/ewww.jpg' }
				]}, 
				{ name: 'ihsan', projects: [
					{ name: 'E Learning', path: 'e-learning', image: 'https://profesi-unm.com/wp-content/uploads/2020/03/ewww.jpg' }
				]}, 
				{ name: 'asep', projects: [
					{ name: 'E Learning', path: 'e-learning', image: 'https://profesi-unm.com/wp-content/uploads/2020/03/ewww.jpg' }
				]},
			],
		}

		const paths = window.location.pathname.split('/')
		const dirName = paths[paths.length - 2]
		const studentDetail = data.students.find(student => student.name === dirName)
		const dataFiltered = studentDetail || data

		return { ...dataFiltered }
	})
})