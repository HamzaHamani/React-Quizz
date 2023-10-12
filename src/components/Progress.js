function Progress({ numQuestion, index, points, maxPossiblePoints }) {
  return (
    <header className="progress">
      {console.log(index)}
      <progress max={numQuestion} value={Number(index)} />
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
