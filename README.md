
# TypeScript Vector Math

A fast and easy-to-use Vector Math library powered by TypeScript


![Logo](https://socialify.git.ci/gonzaloivan121/vector-math/image?description=1&descriptionEditable=Fast%20and%20easy%20to%20use%20Vector%20Math%20powered%20by%20TypeScript&font=Source%20Code%20Pro&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)


## Installation

Install @xloxlolex/vector-math with npm

```bash
  mkdir my-project
  cd my-project
  npm install @xloxlolex/vector-math
```
    
## Import Usage for general purposes
```typescript
import { Vector2, Vector3, Vector4 } from '@xloxlolex/vector-math';
```

## Usage - Vector2

### Import (Vector2)

```typescript
import { Vector2 } from '@xloxlolex/vector-math';
```

### Constructor (Vector2)

```typescript
// Creates a new vector with given x and y components.
// Both components are optional and, if not specified, will be set to 0 by default.
Vector2(x?: number, y?: number);
```

### Static Variables (Vector2)

```typescript
Vector2.right; // Vector2(1, 0)
Vector2.left; // Vector2(-1, 0)
Vector2.up; // Vector2(0, 1)
Vector2.down; // Vector2(0, -1)
Vector2.one; // Vector2(1, 1)
Vector2.zero; // Vector2(0, 0)
Vector2.negativeInfinity; // Vector2(-Infinity, -Infinity)
Vector2.positiveInfinity; // Vector2(Infinity, Infinity)
```

### Static Methods (Vector2)

```typescript
// Returns the angle in degrees between from and to.
Vector2.Angle(from: Vector2, to: Vector2): number;

// Returns a copy of vector with its magnitude clamped to maxLength.
Vector2.ClampMagnitude(vector: Vector2, maxLength: number): Vector2;

// Returns the distance between a and b.
Vector2.Distance(a: Vector2, b: Vector2): number;

// Dot Product of two vectors.
Vector2.Dot(lhs: Vector2, rhs: Vector2): number;

// Linearly interpolates between two points. If t is lower than 0, return a. If t is greater than 1, return b.
Vector2.Lerp(a: Vector2, b: Vector2, t: number): Vector2;

// Linearly interpolates between two points.
Vector2.LerpUnclamped(a: Vector2, b: Vector2, t: number): Vector2;

// Returns the length of a given vector
Vector2.Magnitude(vector: Vector2): number;

// Returns a vector that is made from the largest components of two vectors.
Vector2.Max(lhs: Vector2, rhs: Vector2): Vector2;

// Returns a vector that is made from the smallest components of two vectors.
Vector2.Min(lhs: Vector2, rhs: Vector2): Vector2;

// Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
Vector2.MoveTowards(current: Vector2, target: Vector2, maxDistanceDelta: number): Vector2;

// Add two vectors or a number to a vector
Vector2.Add(a: Vector2, b: Vector2 | number): Vector2;

// Subtract two vectors or a number to a vector
Vector2.Subtract(a: Vector2, b: Vector2 | number): Vector2;

// Multiply two vectors or a number and a vector
Vector2.Multiply(a: Vector2, b: Vector2 | number): Vector2;

// Divide two vectors or a number and a vector
Vector2.Divide(a: Vector2, b: Vector2 | number): Vector2;
```

### Public Variables (Vector2)

```typescript
var vector = new Vector2();

vector.x; // X component of the vector.
vector.y; // Y component of the vector.

vector.normalized; // Returns this vector with a magnitude of 1 (Read Only).
vector.magnitude; // Returns the length of this vector
vector.sqrMagnitude; // Returns the squared length of this vector
```

### Public Methods (Vector2)

```typescript
var vector = new Vector2();

// Add a vector or a number to this vector
vector.Add(rhs: Vector2 | number): void;

// Subtract a vector or a number to this vector
vector.Subtract(rhs: Vector2 | number): void;

// Multiply a vector or a number to this vector
vector.Multiply(rhs: Vector2 | number): void;

// Divide a vector or a number to this vector
vector.Divide(rhs: Vector2 | number): void;
```

## Usage - Vector3

### Import (Vector3)

```typescript
import { Vector3 } from '@xloxlolex/vector-math';
```

### Constructor (Vector3)

```typescript
// Creates a new vector with given x, y and z components.
// All components are optional and, if not specified, will be set to 0 by default.
Vector3(x?: number, y?: number, z?: number);
```

### Static Variables (Vector3)

```typescript
Vector3.right; // Vector3(1, 0, 0)
Vector3.left; // Vector3(-1, 0, 0)
Vector3.up; // Vector3(0, 1, 0)
Vector3.down; // Vector3(0, -1, 0)
Vector3.forward; // Vector3(0, 0, 1)
Vector3.back; // Vector3(0, 0, -1)
Vector3.one; // Vector3(1, 1, 1)
Vector3.zero; // Vector3(0, 0, 0)
Vector3.negativeInfinity; // Vector3(-Infinity, -Infinity, -Infinity)
Vector3.positiveInfinity; // Vector3(Infinity, Infinity, Infinity)
```

### Static Methods (Vector3)

```typescript
// Returns the angle in degrees between from and to.
Vector3.Angle(from: Vector3, to: Vector3): number;

// Returns a copy of vector with its magnitude clamped to maxLength.
Vector3.ClampMagnitude(vector: Vector3, maxLength: number): Vector3;

// Cross Product of two vectors.
Vector3.Cross(lhs: Vector3, rhs: Vector3): Vector3;

// Returns the distance between a and b.
Vector3.Distance(a: Vector3, b: Vector3): number;

// Dot Product of two vectors.
Vector3.Dot(lhs: Vector3, rhs: Vector3): number;

// Linearly interpolates between two points. If t is lower than 0, return a. If t is greater than 1, return b.
Vector3.Lerp(a: Vector3, b: Vector3, t: number): Vector3;

// Linearly interpolates between two points.
Vector3.LerpUnclamped(a: Vector3, b: Vector3, t: number): Vector3;

// Returns the length of a given vector
Vector3.Magnitude(vector: Vector3): number;

// Returns a vector that is made from the largest components of two vectors.
Vector3.Max(lhs: Vector3, rhs: Vector3): Vector3;

// Returns a vector that is made from the smallest components of two vectors.
Vector3.Min(lhs: Vector3, rhs: Vector3): Vector3;

// Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
Vector3.MoveTowards(current: Vector3, target: Vector3, maxDistanceDelta: number): Vector3;

// Add two vectors or a number to a vector
Vector3.Add(a: Vector3, b: Vector3 | number): Vector3;

// Subtract two vectors or a number to a vector
Vector3.Subtract(a: Vector3, b: Vector3 | number): Vector3;

// Multiply two vectors or a number and a vector
Vector3.Multiply(a: Vector3, b: Vector3 | number): Vector3;

// Divide two vectors or a number and a vector
Vector3.Divide(a: Vector3, b: Vector3 | number): Vector3;
```

### Public Variables (Vector3)

```typescript
var vector = new Vector3();

vector.x; // X component of the vector.
vector.y; // Y component of the vector.
vector.z; // Z component of the vector.

vector.normalized; // Returns this vector with a magnitude of 1 (Read Only).
vector.magnitude; // Returns the length of this vector
vector.sqrMagnitude; // Returns the squared length of this vector
```

### Public Methods (Vector3)

```typescript
var vector = new Vector3();

// Add a vector or a number to this vector
vector.Add(rhs: Vector3 | number): void;

// Subtract a vector or a number to this vector
vector.Subtract(rhs: Vector3 | number): void;

// Multiply a vector or a number to this vector
vector.Multiply(rhs: Vector3 | number): void;

// Divide a vector or a number to this vector
vector.Divide(rhs: Vector3 | number): void;
```

## Usage - Vector4

### Import (Vector4)

```typescript
import { Vector4 } from '@xloxlolex/vector-math';
```

### Constructor (Vector4)

```typescript
// Creates a new vector with given x, y, z and w components.
// All components are optional and, if not specified, x,y,z will be set to 0 and w will be set to 1 by default.
Vector4(x?: number, y?: number, z?: number, w?: number);
```

### Static Variables (Vector4)

```typescript
Vector4.one; // Vector4(1, 1, 1, 1)
Vector4.zero; // Vector4(0, 0, 0, 0)
Vector4.negativeInfinity; // Vector4(-Infinity, -Infinity, -Infinity, -Infinity)
Vector4.positiveInfinity; // Vector4(Infinity, Infinity, Infinity, Infinity)
```

### Static Methods (Vector4)

```typescript
// Returns the angle in degrees between from and to.
Vector4.Angle(from: Vector4, to: Vector4): number;

// Returns a copy of vector with its magnitude clamped to maxLength.
Vector4.ClampMagnitude(vector: Vector4, maxLength: number): Vector4;

// Returns the distance between a and b.
Vector4.Distance(a: Vector4, b: Vector4): number;

// Dot Product of two vectors.
Vector4.Dot(lhs: Vector4, rhs: Vector4): number;

// Linearly interpolates between two points. If t is lower than 0, return a. If t is greater than 1, return b.
Vector4.Lerp(a: Vector4, b: Vector4, t: number): Vector4;

// Linearly interpolates between two points.
Vector4.LerpUnclamped(a: Vector4, b: Vector4, t: number): Vector4;

// Returns the length of a given vector
Vector4.Magnitude(vector: Vector4): number;

// Returns a vector that is made from the largest components of two vectors.
Vector4.Max(lhs: Vector4, rhs: Vector4): Vector4;

// Returns a vector that is made from the smallest components of two vectors.
Vector4.Min(lhs: Vector4, rhs: Vector4): Vector4;

// Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
Vector4.MoveTowards(current: Vector4, target: Vector4, maxDistanceDelta: number): Vector4;

// Add two vectors or a number to a vector
Vector4.Add(a: Vector4, b: Vector4 | number): Vector4;

// Subtract two vectors or a number to a vector
Vector4.Subtract(a: Vector4, b: Vector4 | number): Vector4;

// Multiply two vectors or a number and a vector
Vector4.Multiply(a: Vector4, b: Vector4 | number): Vector4;

// Divide two vectors or a number and a vector
Vector4.Divide(a: Vector4, b: Vector4 | number): Vector4;
```

### Public Variables (Vector4)

```typescript
var vector = new Vector4();

vector.x; // X component of the vector.
vector.y; // Y component of the vector.
vector.z; // Z component of the vector.
vector.w; // W component of the vector.

vector.normalized; // Returns this vector with a magnitude of 1 (Read Only).
vector.magnitude; // Returns the length of this vector
vector.sqrMagnitude; // Returns the squared length of this vector
```

### Public Methods (Vector4)

```typescript
var vector = new Vector4();

// Add a vector or a number to this vector
vector.Add(rhs: Vector4 | number): void;

// Subtract a vector or a number to this vector
vector.Subtract(rhs: Vector4 | number): void;

// Multiply a vector or a number to this vector
vector.Multiply(rhs: Vector4 | number): void;

// Divide a vector or a number to this vector
vector.Divide(rhs: Vector4 | number): void;
```
## Authors

- [@gonzaloivan121 (xloxlolex)](https://www.github.com/gonzaloivan121)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

For support, email chaparro.gonzaloivan@gmail.com.

