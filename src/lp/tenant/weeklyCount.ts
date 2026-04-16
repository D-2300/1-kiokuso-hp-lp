/**
 * 週単位で固定される非公開物件数を返す。
 * 同じ週（月曜〜日曜）の間は同じ値を返し、週が変わると別の値になる。
 * 範囲: 40〜50件
 */
export function getWeeklyPropertyCount(): number {
  const now = new Date();
  // 週番号を算出（年 + ISO週番号をシードにする）
  const year = now.getFullYear();
  const jan1 = new Date(year, 0, 1);
  const dayOfYear = Math.floor(
    (now.getTime() - jan1.getTime()) / (24 * 60 * 60 * 1000)
  );
  const weekNumber = Math.floor((dayOfYear + jan1.getDay()) / 7);

  // 簡易ハッシュ: year と weekNumber から決定的に 0〜10 の整数を得る
  const seed = year * 100 + weekNumber;
  const hash = ((seed * 2654435761) >>> 0) % 11; // 0〜10

  return 40 + hash;
}
