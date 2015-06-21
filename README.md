# Object.assign

Polyfill for Object.assign(target, source1, source2, ...).

    var source = { a: 1 };
    var target = { b: 2 };
    
    Object.assign(target, source);   // { a: 1, b: 2 }

Does not overwrite native version of Object.assign where it already exists.