/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
    const adjacencyList = Array(numCourses).fill().map(x => []);
    const node2inDegree = new Uint8Array(numCourses);
    prerequisites.forEach(([course, prereq]) => {
        adjacencyList[prereq].push(course);
        node2inDegree[course]++;
    });

    const order = new Set();
    const courses = Object.entries(node2inDegree).reduce((acc, [node, inDegree]) => {
        if (inDegree === 0)
            acc.push(node);
        return acc;
    }, []);

    while (courses.length) {
        const top = courses.pop();
        for (const neighbour of adjacencyList[top]) {
            if (order.has(neighbour))
                return [];
            if (--node2inDegree[neighbour] === 0)
                courses.push(neighbour);
        }
        order.add(Number(top));
    }

    return order.size === numCourses ? Array.from(order) : [];
}