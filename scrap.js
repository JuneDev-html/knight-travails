// idk, prbly dont want this
const constructChildren = () => {
  let children = [];
  while (children.length < 8) {
    let child = "child";
    children.push(child);
  }
  return children;
};

// long way to build children as individual nodes without array
const conceptBuilder = () => {
  let dl1 = root.data[0] - 1;
  let dl2 = root.data[1] - 2;

  let ld1 = root.data[0] - 2;
  let ld2 = root.data[1] - 1;

  let lu1 = root.data[0] - 2;
  let lu2 = root.data[1] + 1;

  let ul1 = root.data[0] - 1;
  let ul2 = root.data[1] + 2;

  let ur1 = root.data[0] + 1;
  let ur2 = root.data[1] + 2;

  let ru1 = root.data[0] + 2;
  let ru2 = root.data[1] + 1;

  let rd1 = root.data[0] + 2;
  let rd2 = root.data[1] - 1;

  let dr1 = root.data[0] + 1;
  let dr2 = root.data[1] - 2;

  root.dLeft = makeChild(dl1, dl2);
  root.lDown = makeChild(ld1, ld2);
  root.lUp = makeChild(lu1, lu2);
  root.uLeft = makeChild(ul1, ul2);
  root.uRight = makeChild(ur1, ur2);
};
