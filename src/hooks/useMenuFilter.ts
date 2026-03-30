"use client";

import { useState, useMemo } from "react";
import type { MenuItem } from "@/types";

type FilterCategory = "semua" | MenuItem["category"];

export function useMenuFilter(items: MenuItem[]) {
  const [active, setActive] = useState<FilterCategory>("semua");

  const filtered = useMemo(() => {
    if (active === "semua") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return { active, setActive, filtered };
}
