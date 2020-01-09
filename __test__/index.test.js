const { objectDeepContains, collectionDeepContains } = require('../src/index');

describe('Test Deep Compare', () => {
  describe('Test objectDeepContains Primitives', () => {
    it('A ⊆ B (primitives), true', () => {
      const A = { a: 1, b: 2 };
      const B = { b: 2 };
      const result = objectDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊄ B (primitives), partial match, false', () => {
      const A = { b: 2 };
      const B = { a: 1, b: 2, c: 3 };
      const result = objectDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊂ B (primitives), partial match, false', () => {
      const A = { a: 1, c: 3, d: 4 };
      const B = { a: 1, b: 2, c: 3 };
      const result = objectDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊄ B (primitives), false', () => {
      const A = { a: 1, b: 2, c: 3 };
      const B = { d: 4, e: 5, f: 6 };
      const result = objectDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊅ B (primitives)', () => {
      const A = { a: 1, b: 2, c: 3 };
      const B = { d: 4, e: 5, f: 6 };
      const result = objectDeepContains(B, A);

      expect(result).toBeFalsy();
    });
  });

  describe('Test objectDeepContains Mix primitives/Objects', () => {
    it('A ⊆ B (primitives), true', () => {
      const A = { a: true, b: [2, 1] };
      const B = { a: true, b: [1, 2] };
      const result = objectDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊆ B (primitives), true', () => {
      const A = { a: true, b: [2] };
      const B = { a: true, b: [1] };
      const result = objectDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊆ B (primitives), true', () => {
      const A = { a: 1, b: { b1: null, b2: 2 } };
      const B = { b: { b1: null, b2: 2 } };
      const result = objectDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊆ B (primitives), true', () => {
      const A = { a: 1, b: { b1: null, b2: 2 } };
      const B = { b: { b1: null, b2: 2 } };
      const result = objectDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊄ B (primitives), partial match, false', () => {
      const A = { b: { b1: [1, 2, 3], b2: undefined } };
      const B = { b1: [1, 2, 3], b2: undefined };
      const result = objectDeepContains(A, B);

      expect(result).toBeFalsy();
    });
  });

  describe('Test collectionDeepContains Primitives', () => {
    it('A ⊆ B (primitives), true', () => {
      const A = [1, 2, 3];
      const B = [2];
      const result = collectionDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊄ B (primitives), partial match, false', () => {
      const A = [2];
      const B = [1, 2, 3];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊂ B (primitives), partial match, false', () => {
      const A = [1, 3, 4];
      const B = [1, 2, 3];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊄ B (primitives), false', () => {
      const A = [1, 2, 3];
      const B = [4, 5, 6];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊅ B (primitives)', () => {
      const B = [1, 2, 3];
      const A = [4, 5, 6];
      const result = collectionDeepContains(B, A);

      expect(result).toBeFalsy();
    });
  });

  describe('Test collectionDeepContains Objects', () => {
    it('A ⊆ B (objects), true', () => {
      const A = [{ a: 'a' }, { b: 'b' }, { c: 'c' }];
      const B = [{ a: 'a' }, { b: 'b' }];
      const result = collectionDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊇ B (objects), partial match, false', () => {
      const A = [{ a: 'a' }, { b: 'b' }];
      const B = [{ a: 'a' }, { b: 'b' }, { c: 'c' }];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊂ B (objects), partial match, false', () => {
      const A = [{ a: 'a' }, { b: 'b' }];
      const B = [{ b: 'b' }, { c: 'c' }];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊄ B (objects), false', () => {
      const A = [{ a: 'a' }, { b: 'b' }];
      const B = [{ d: 'd' }, { c: 'c' }];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊅ B (objects)', () => {
      const A = [{ a: 'a' }, { b: 'b' }];
      const B = [{ d: 'd' }, { c: 'c' }];
      const result = collectionDeepContains(B, A);

      expect(result).toBeFalsy();
    });
  });

  describe('Test collectionDeepContains Mix primitives/Objects', () => {
    it('A ⊆ B (objects), true', () => {
      const A = [1, { b: 'b' }, 3];
      const B = [1, { b: 'b' }];
      const result = collectionDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊇ B (objects), partial match, false', () => {
      const A = [1, { b: 'b' }];
      const B = [1, { b: 'b' }, 3];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊂ B (objects), partial match, false', () => {
      const A = [1, { b: 'b' }];
      const B = [{ b: 'b' }, 3];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊄ B (objects), false', () => {
      const A = [1, { b: 'b' }];
      const B = [{ d: 'd' }, 3];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });

    it('A ⊅ B (objects)', () => {
      const A = [1, { b: 'b' }];
      const B = [{ d: 'd' }, 3];
      const result = collectionDeepContains(B, A);

      expect(result).toBeFalsy();
    });

    it('A ⊆ B (objects), true', () => {
      const A = [
        {
          fieldName: { value: 'stack' },
          filterParams: ['a'],
          filterType: 'IS',
          negate: false,
        },
      ];
      const B = [
        {
          fieldName: { value: 'stack' },
          filterParams: ['a'],
          filterType: 'IS',
          negate: false,
        },
      ];
      const result = collectionDeepContains(A, B);

      expect(result).toBeTruthy();
    });

    it('A ⊄ ∅ (empty group), false', () => {
      const A = [];
      const B = [{ fieldName: { value: 'stack' } }];
      const result = collectionDeepContains(A, B);

      expect(result).toBeFalsy();
    });
  });
});
