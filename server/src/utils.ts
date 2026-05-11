/**
 * Viết hoa chữ cái đầu tiên của chuỗi và xử lý khoảng trắng.
 * @param input - Chuỗi đầu vào.
 * @returns Chuỗi đã được chuẩn hóa.
 * @throws {TypeError} Nếu input không phải là string.
 */
export function capitalize(input: string): string {
  if (typeof input !== 'string') throw new TypeError('input must be string');
  if (!input.trim()) return '';
  const [first, ...rest] = input.trim();
  return first.toUpperCase() + rest.join('');
}

/**
 * Tính tổng các số trong mảng.
 * @param nums - Mảng các số.
 * @returns Tổng giá trị.
 * @throws {TypeError} Nếu input không phải là mảng.
 */
export function sumAll(nums: number[]): number {
  if (!Array.isArray(nums)) throw new TypeError('nums must be number[]');
  return nums.reduce((acc, n) => acc + Number(n || 0), 0);
}

/**
 * Loại bỏ các phần tử trùng lặp.
 * @param arr - Mảng bất kỳ.
 * @returns Mảng chỉ chứa các phần tử duy nhất.
 * @throws {TypeError} Nếu input không phải là mảng.
 */
export function uniq<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) throw new TypeError('arr must be array');
  return Array.from(new Set(arr));
}