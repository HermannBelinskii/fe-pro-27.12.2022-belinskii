function pow(num, deg) {
  if (deg != 1) { 
    return num * pow(num, deg - 1);
  } else {
    return num;
  }
}

console.log(pow(2, 4));
