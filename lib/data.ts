export type Problem = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  topicSlug: string;
};

export type Topic = {
  id: string;
  slug: string;
  title: string;
  description: string;
};

export const topics: Topic[] = [
  {
    id: "1",
    slug: "arrays",
    title: "Arrays",
    description: "Learn traversal, prefix sums, sliding window, and more.",
  },
  {
    id: "2",
    slug: "linked-lists",
    title: "Linked Lists",
    description: "Pointers, reversal, cycle detection, and merging.",
  },
  {
    id: "3",
    slug: "stacks-queues",
    title: "Stacks & Queues",
    description: "Core linear structures and classic interview patterns.",
  },
];

export const problems: Problem[] = [
  {
    id: "p1",
    title: "Two Sum",
    difficulty: "Easy",
    description: "Find two numbers that add up to a target.",
    topicSlug: "arrays",
  },
  {
    id: "p2",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description: "Track min price and max profit.",
    topicSlug: "arrays",
  },
  {
    id: "p3",
    title: "Reverse Linked List",
    difficulty: "Easy",
    description: "Reverse a singly linked list iteratively or recursively.",
    topicSlug: "linked-lists",
  },
  {
    id: "p4",
    title: "Linked List Cycle",
    difficulty: "Easy",
    description: "Detect whether a linked list contains a cycle.",
    topicSlug: "linked-lists",
  },
];