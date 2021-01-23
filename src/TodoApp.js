import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "./hooks/useTodoState";
import useRandomQuote from "./hooks/useRandomQuotes";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Learning with PAPA react", completed: false },
  ];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );
  const quote = useRandomQuote();
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar
        position="sticky"
        style={{
          fontWeight: "600",
          backgroundColor: "primary",
          color: "#FAFAFA",
          height: "64px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TODOS ASSIGNMENT
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        className="Quotes"
        style={{ color: "#4F4B96", marginTop: "2rem", textAlign: "center" }}
      >
        <h2>
          Famous Quotes<span>😍😍👌🎉👍❤❤</span>
        </h2>
      </div>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Paper
          style={{
            padding: 0,
            margin: 0,
            alignContent: "center",
            height: "40px",
            backgroundColor: "#fafafa",
          }}
          elevation={0}
        >
          <Typography color="inherit">
            <blockquote>
              <p>
                <h4>{quote.text}</h4>
              </p>
            </blockquote>
            <p>--{quote.author}</p>
          </Typography>
        </Paper>
      </Grid>
      <Grid container justify="center" style={{ marginTop: "3rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
