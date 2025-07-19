function walkIntoOffice(action: "grabACoffee" | "keepWalking") {
  const transistion = {
    grabACoffee: "late",
    keepWalking: "on time",
  } as const;

  const result = transistion[action];
  console.log(result);
}

walkIntoOffice("grabACoffee");
walkIntoOffice("keepWalking");

export {};
