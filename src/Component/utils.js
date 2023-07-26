

export function filterData(searchText, courses) {
    const filteredData = courses.filter((course) =>
      course.courseName.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return filteredData;
  }
    