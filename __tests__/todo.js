/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Test Suite ", () => {
  beforeAll(() => {
    add({
      title: "Service now",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("Add new todo", () => {
    const x = all.length;
    add({
      title: "Test-1", 
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(x + 1);
  });

  test("Mark as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieve overdue items", () => {
    let overdueItems = overdue();
    const x = overdueItems.length;
    add({
      title: "test-2",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() - 10))
        .toLocaleDateString("en-CA"),
    });
    overdueItems = overdue();
    expect(overdueItems.length).toBe(x + 1);
  });

  test("retrieve due today items", () => {
    let dueTodayItems = dueToday();
    const x = dueTodayItems.length;
    add({
      title: "test-3",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(x + 1);
  });

  test("retrieve due Later items", () => {
    let dueLaterItems = dueLater();
    const x = dueLaterItems.length;
    add({
      title: "test-4",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 10))
        .toLocaleDateString("en-CA"),
    });
    dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(x + 1);
  });
});
