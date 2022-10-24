function find_longest_word(str) {

    // Your code
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};
  
    document.writeln(find_longest_word('Web Development In Telran'));