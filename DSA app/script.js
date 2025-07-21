// DSA Learning App - Main JavaScript File

class DSAApp {
  constructor() {
    this.currentUser = null
    this.currentWeek = null
    this.weekData = this.initializeWeekData()
    this.init()
  }

  init() {
    this.checkExistingUser()
    this.bindEvents()
    this.updateProgressStats()
  }

  // Initialize week data structure
  initializeWeekData() {
    return {
      1: {
        title: "Arrays and Strings",
        subtitle: "Foundation of Data Structures",
        description: "Master the basics of arrays and string manipulation - the building blocks of programming.",
        topics: [
          { title: "Array Basics", description: "Understanding array operations, indexing, and memory layout" },
          { title: "String Manipulation", description: "String operations, pattern matching, and algorithms" },
          { title: "Two Pointers Technique", description: "Efficient array traversal using two pointers" },
          { title: "Sliding Window", description: "Optimizing subarray problems with sliding window technique" },
        ],
        tasks: [
          // Array Basics
          { id: "w1t1", title: "Two Sum", description: "Array Basics", url: "https://leetcode.com/problems/two-sum/" },
          {
            id: "w1t2",
            title: "Best Time to Buy and Sell Stock",
            description: "Array Basics",
            url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          },
          {
            id: "w1t3",
            title: "Contains Duplicate",
            description: "Array Basics",
            url: "https://leetcode.com/problems/contains-duplicate/",
          },
          {
            id: "w1t4",
            title: "Product of Array Except Self",
            description: "Array Basics",
            url: "https://leetcode.com/problems/product-of-array-except-self/",
          },
          {
            id: "w1t5",
            title: "Maximum Subarray",
            description: "Array Basics",
            url: "https://leetcode.com/problems/maximum-subarray/",
          },
          // String Manipulation
          {
            id: "w1t6",
            title: "Valid Anagram",
            description: "String Manipulation",
            url: "https://leetcode.com/problems/valid-anagram/",
          },
          {
            id: "w1t7",
            title: "Valid Palindrome",
            description: "String Manipulation",
            url: "https://leetcode.com/problems/valid-palindrome/",
          },
          {
            id: "w1t8",
            title: "Longest Common Prefix",
            description: "String Manipulation",
            url: "https://leetcode.com/problems/longest-common-prefix/",
          },
          {
            id: "w1t9",
            title: "Group Anagrams",
            description: "String Manipulation",
            url: "https://leetcode.com/problems/group-anagrams/",
          },
          {
            id: "w1t10",
            title: "Palindromic Substrings",
            description: "String Manipulation",
            url: "https://leetcode.com/problems/palindromic-substrings/",
          },
          // Two Pointers Technique
          {
            id: "w1t11",
            title: "3Sum",
            description: "Two Pointers Technique",
            url: "https://leetcode.com/problems/3sum/",
          },
          {
            id: "w1t12",
            title: "Container With Most Water",
            description: "Two Pointers Technique",
            url: "https://leetcode.com/problems/container-with-most-water/",
          },
          {
            id: "w1t13",
            title: "Remove Duplicates from Sorted Array",
            description: "Two Pointers Technique",
            url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
          },
          {
            id: "w1t14",
            title: "Move Zeroes",
            description: "Two Pointers Technique",
            url: "https://leetcode.com/problems/move-zeroes/",
          },
          {
            id: "w1t15",
            title: "Trapping Rain Water",
            description: "Two Pointers Technique",
            url: "https://leetcode.com/problems/trapping-rain-water/",
          },
          // Sliding Window
          {
            id: "w1t16",
            title: "Longest Substring Without Repeating Characters",
            description: "Sliding Window",
            url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          },
          {
            id: "w1t17",
            title: "Minimum Window Substring",
            description: "Sliding Window",
            url: "https://leetcode.com/problems/minimum-window-substring/",
          },
          {
            id: "w1t18",
            title: "Sliding Window Maximum",
            description: "Sliding Window",
            url: "https://leetcode.com/problems/sliding-window-maximum/",
          },
          {
            id: "w1t19",
            title: "Find All Anagrams in a String",
            description: "Sliding Window",
            url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
          },
          {
            id: "w1t20",
            title: "Longest Repeating Character Replacement",
            description: "Sliding Window",
            url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
          },
        ],
        practiceLinks: [
          {
            title: "Array Problems",
            description: "Essential array challenges",
            url: "https://leetcode.com/tag/array/",
          },
          {
            title: "String Problems",
            description: "String manipulation practice",
            url: "https://leetcode.com/tag/string/",
          },
          {
            title: "Two Pointers",
            description: "Two pointer technique problems",
            url: "https://leetcode.com/tag/two-pointers/",
          },
        ],
      },
      2: {
        title: "Linked Lists",
        subtitle: "Dynamic Data Structures",
        description: "Learn about linked lists, their operations, and advanced manipulation techniques.",
        topics: [
          { title: "Singly Linked Lists", description: "Basic linked list operations and implementation" },
          { title: "Doubly Linked Lists", description: "Bidirectional linked lists and their advantages" },
          { title: "Circular Linked Lists", description: "Understanding circular references and applications" },
          { title: "Advanced Operations", description: "Merging, reversing, and detecting cycles" },
        ],
        tasks: [
          // Singly Linked Lists
          {
            id: "w2t1",
            title: "Reverse Linked List",
            description: "Singly Linked Lists",
            url: "https://leetcode.com/problems/reverse-linked-list/",
          },
          {
            id: "w2t2",
            title: "Merge Two Sorted Lists",
            description: "Singly Linked Lists",
            url: "https://leetcode.com/problems/merge-two-sorted-lists/",
          },
          {
            id: "w2t3",
            title: "Remove Nth Node From End of List",
            description: "Singly Linked Lists",
            url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
          },
          {
            id: "w2t4",
            title: "Linked List Cycle",
            description: "Singly Linked Lists",
            url: "https://leetcode.com/problems/linked-list-cycle/",
          },
          {
            id: "w2t5",
            title: "Middle of the Linked List",
            description: "Singly Linked Lists",
            url: "https://leetcode.com/problems/middle-of-the-linked-list/",
          },
          // Doubly Linked Lists
          {
            id: "w2t6",
            title: "Design Linked List",
            description: "Doubly Linked Lists",
            url: "https://leetcode.com/problems/design-linked-list/",
          },
          {
            id: "w2t7",
            title: "Flatten a Multilevel Doubly Linked List",
            description: "Doubly Linked Lists",
            url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
          },
          {
            id: "w2t8",
            title: "Insert into a Sorted Circular Linked List",
            description: "Doubly Linked Lists",
            url: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
          },
          {
            id: "w2t9",
            title: "Copy List with Random Pointer",
            description: "Doubly Linked Lists",
            url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
          },
          {
            id: "w2t10",
            title: "LRU Cache",
            description: "Doubly Linked Lists",
            url: "https://leetcode.com/problems/lru-cache/",
          },
          // Circular Linked Lists
          {
            id: "w2t11",
            title: "Linked List Cycle II",
            description: "Circular Linked Lists",
            url: "https://leetcode.com/problems/linked-list-cycle-ii/",
          },
          {
            id: "w2t12",
            title: "Split Linked List in Parts",
            description: "Circular Linked Lists",
            url: "https://leetcode.com/problems/split-linked-list-in-parts/",
          },
          {
            id: "w2t13",
            title: "Rotate List",
            description: "Circular Linked Lists",
            url: "https://leetcode.com/problems/rotate-list/",
          },
          {
            id: "w2t14",
            title: "Add Two Numbers",
            description: "Circular Linked Lists",
            url: "https://leetcode.com/problems/add-two-numbers/",
          },
          {
            id: "w2t15",
            title: "Palindrome Linked List",
            description: "Circular Linked Lists",
            url: "https://leetcode.com/problems/palindrome-linked-list/",
          },
          // Advanced Operations
          {
            id: "w2t16",
            title: "Merge k Sorted Lists",
            description: "Advanced Operations",
            url: "https://leetcode.com/problems/merge-k-sorted-lists/",
          },
          {
            id: "w2t17",
            title: "Reverse Nodes in k-Group",
            description: "Advanced Operations",
            url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
          },
          {
            id: "w2t18",
            title: "Sort List",
            description: "Advanced Operations",
            url: "https://leetcode.com/problems/sort-list/",
          },
          {
            id: "w2t19",
            title: "Intersection of Two Linked Lists",
            description: "Advanced Operations",
            url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
          },
          {
            id: "w2t20",
            title: "Reorder List",
            description: "Advanced Operations",
            url: "https://leetcode.com/problems/reorder-list/",
          },
        ],
        practiceLinks: [
          {
            title: "Linked List Basics",
            description: "Fundamental linked list problems",
            url: "https://leetcode.com/tag/linked-list/",
          },
          {
            title: "Advanced Linked Lists",
            description: "Complex manipulation problems",
            url: "https://leetcode.com/problemset/all/?topicSlugs=linked-list&difficulty=MEDIUM",
          },
        ],
      },
      3: {
        title: "Stacks and Queues",
        subtitle: "LIFO and FIFO Data Structures",
        description: "Master stack and queue operations, and learn their applications in solving complex problems.",
        topics: [
          { title: "Stack Implementation", description: "Array and linked list based stack implementations" },
          { title: "Queue Implementation", description: "Circular queues and priority queues" },
          { title: "Stack Applications", description: "Expression evaluation, parentheses matching" },
          { title: "Queue Applications", description: "BFS, scheduling, and buffer management" },
        ],
        tasks: [
          // Stack Implementation
          {
            id: "w3t1",
            title: "Valid Parentheses",
            description: "Stack Implementation",
            url: "https://leetcode.com/problems/valid-parentheses/",
          },
          {
            id: "w3t2",
            title: "Min Stack",
            description: "Stack Implementation",
            url: "https://leetcode.com/problems/min-stack/",
          },
          {
            id: "w3t3",
            title: "Evaluate Reverse Polish Notation",
            description: "Stack Implementation",
            url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
          },
          {
            id: "w3t4",
            title: "Implement Stack using Queues",
            description: "Stack Implementation",
            url: "https://leetcode.com/problems/implement-stack-using-queues/",
          },
          {
            id: "w3t5",
            title: "Remove All Adjacent Duplicates In String",
            description: "Stack Implementation",
            url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
          },
          // Queue Implementation
          {
            id: "w3t6",
            title: "Implement Queue using Stacks",
            description: "Queue Implementation",
            url: "https://leetcode.com/problems/implement-queue-using-stacks/",
          },
          {
            id: "w3t7",
            title: "Design Circular Queue",
            description: "Queue Implementation",
            url: "https://leetcode.com/problems/design-circular-queue/",
          },
          {
            id: "w3t8",
            title: "Moving Average from Data Stream",
            description: "Queue Implementation",
            url: "https://leetcode.com/problems/moving-average-from-data-stream/",
          },
          {
            id: "w3t9",
            title: "Number of Recent Calls",
            description: "Queue Implementation",
            url: "https://leetcode.com/problems/number-of-recent-calls/",
          },
          {
            id: "w3t10",
            title: "First Unique Character in a String",
            description: "Queue Implementation",
            url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
          },
          // Stack Applications
          {
            id: "w3t11",
            title: "Next Greater Element I",
            description: "Stack Applications",
            url: "https://leetcode.com/problems/next-greater-element-i/",
          },
          {
            id: "w3t12",
            title: "Daily Temperatures",
            description: "Stack Applications",
            url: "https://leetcode.com/problems/daily-temperatures/",
          },
          {
            id: "w3t13",
            title: "Largest Rectangle in Histogram",
            description: "Stack Applications",
            url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
          },
          {
            id: "w3t14",
            title: "Basic Calculator",
            description: "Stack Applications",
            url: "https://leetcode.com/problems/basic-calculator/",
          },
          {
            id: "w3t15",
            title: "Online Stock Span",
            description: "Stack Applications",
            url: "https://leetcode.com/problems/online-stock-span/",
          },
          // Queue Applications
          {
            id: "w3t16",
            title: "Binary Tree Level Order Traversal",
            description: "Queue Applications",
            url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          },
          {
            id: "w3t17",
            title: "Rotting Oranges",
            description: "Queue Applications",
            url: "https://leetcode.com/problems/rotting-oranges/",
          },
          {
            id: "w3t18",
            title: "Open the Lock",
            description: "Queue Applications",
            url: "https://leetcode.com/problems/open-the-lock/",
          },
          {
            id: "w3t19",
            title: "Perfect Squares",
            description: "Queue Applications",
            url: "https://leetcode.com/problems/perfect-squares/",
          },
          {
            id: "w3t20",
            title: "Shortest Path in Binary Matrix",
            description: "Queue Applications",
            url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
          },
        ],
        practiceLinks: [
          {
            title: "Stack Problems",
            description: "Stack-based algorithm challenges",
            url: "https://leetcode.com/tag/stack/",
          },
          {
            title: "Queue Problems",
            description: "Queue implementation and applications",
            url: "https://leetcode.com/tag/queue/",
          },
        ],
      },
      4: {
        title: "Trees and Binary Search Trees",
        subtitle: "Hierarchical Data Structures",
        description: "Explore tree structures, binary search trees, and tree traversal algorithms.",
        topics: [
          { title: "Binary Trees", description: "Tree structure, nodes, and basic operations" },
          { title: "Binary Search Trees", description: "BST properties and efficient searching" },
          { title: "Tree Traversals", description: "Inorder, preorder, postorder, and level-order traversals" },
          { title: "Tree Balancing", description: "AVL trees and rotation operations" },
        ],
        tasks: [
          // Binary Trees
          {
            id: "w4t1",
            title: "Maximum Depth of Binary Tree",
            description: "Binary Trees",
            url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
          },
          {
            id: "w4t2",
            title: "Same Tree",
            description: "Binary Trees",
            url: "https://leetcode.com/problems/same-tree/",
          },
          {
            id: "w4t3",
            title: "Invert Binary Tree",
            description: "Binary Trees",
            url: "https://leetcode.com/problems/invert-binary-tree/",
          },
          {
            id: "w4t4",
            title: "Binary Tree Inorder Traversal",
            description: "Binary Trees",
            url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
          },
          {
            id: "w4t5",
            title: "Binary Tree Preorder Traversal",
            description: "Binary Trees",
            url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
          },
          // Binary Search Trees
          {
            id: "w4t6",
            title: "Validate Binary Search Tree",
            description: "Binary Search Trees",
            url: "https://leetcode.com/problems/validate-binary-search-tree/",
          },
          {
            id: "w4t7",
            title: "Search in a Binary Search Tree",
            description: "Binary Search Trees",
            url: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
          },
          {
            id: "w4t8",
            title: "Insert into a Binary Search Tree",
            description: "Binary Search Trees",
            url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
          },
          {
            id: "w4t9",
            title: "Delete Node in a BST",
            description: "Binary Search Trees",
            url: "https://leetcode.com/problems/delete-node-in-a-bst/",
          },
          {
            id: "w4t10",
            title: "Kth Smallest Element in a BST",
            description: "Binary Search Trees",
            url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
          },
          // Tree Traversals
          {
            id: "w4t11",
            title: "Binary Tree Postorder Traversal",
            description: "Tree Traversals",
            url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
          },
          {
            id: "w4t12",
            title: "Binary Tree Level Order Traversal",
            description: "Tree Traversals",
            url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          },
          {
            id: "w4t13",
            title: "Binary Tree Zigzag Level Order Traversal",
            description: "Tree Traversals",
            url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
          },
          {
            id: "w4t14",
            title: "Maximum Width of Binary Tree",
            description: "Tree Traversals",
            url: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
          },
          {
            id: "w4t15",
            title: "Serialize and Deserialize Binary Tree",
            description: "Tree Traversals",
            url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
          },
          // Tree Balancing
          {
            id: "w4t16",
            title: "Convert Sorted Array to Binary Search Tree",
            description: "Tree Balancing",
            url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
          },
          {
            id: "w4t17",
            title: "Balanced Binary Tree",
            description: "Tree Balancing",
            url: "https://leetcode.com/problems/balanced-binary-tree/",
          },
          {
            id: "w4t18",
            title: "Two Sum IV - Input is a BST",
            description: "Tree Balancing",
            url: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
          },
          {
            id: "w4t19",
            title: "Recover Binary Search Tree",
            description: "Tree Balancing",
            url: "https://leetcode.com/problems/recover-binary-search-tree/",
          },
          {
            id: "w4t20",
            title: "Smallest Range I",
            description: "Tree Balancing",
            url: "https://leetcode.com/problems/smallest-range-i/",
          },
        ],
        practiceLinks: [
          {
            title: "Binary Tree Problems",
            description: "Tree structure challenges",
            url: "https://leetcode.com/tag/binary-tree/",
          },
          {
            title: "BST Problems",
            description: "Binary search tree specific problems",
            url: "https://leetcode.com/tag/binary-search-tree/",
          },
        ],
      },
      5: {
        title: "Heaps and Priority Queues",
        subtitle: "Efficient Priority Management",
        description: "Learn about heap data structure and its applications in priority-based algorithms.",
        topics: [
          { title: "Heap Properties", description: "Min-heap and max-heap characteristics" },
          { title: "Heap Operations", description: "Insert, delete, heapify operations" },
          { title: "Priority Queues", description: "Implementation using heaps" },
          { title: "Heap Applications", description: "Heap sort, top-k problems, median finding" },
        ],
        tasks: [
          // Heap Properties
          {
            id: "w5t1",
            title: "Kth Largest Element in a Stream",
            description: "Heap Properties",
            url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
          },
          {
            id: "w5t2",
            title: "Last Stone Weight",
            description: "Heap Properties",
            url: "https://leetcode.com/problems/last-stone-weight/",
          },
          {
            id: "w5t3",
            title: "K Closest Points to Origin",
            description: "Heap Properties",
            url: "https://leetcode.com/problems/k-closest-points-to-origin/",
          },
          {
            id: "w5t4",
            title: "Top K Frequent Elements",
            description: "Heap Properties",
            url: "https://leetcode.com/problems/top-k-frequent-elements/",
          },
          {
            id: "w5t5",
            title: "Find Median from Data Stream",
            description: "Heap Properties",
            url: "https://leetcode.com/problems/find-median-from-data-stream/",
          },
          // Heap Operations
          {
            id: "w5t6",
            title: "Heap Sort",
            description: "Heap Operations",
            url: "https://www.geeksforgeeks.org/heap-sort/",
          },
          {
            id: "w5t7",
            title: "Task Scheduler",
            description: "Heap Operations",
            url: "https://leetcode.com/problems/task-scheduler/",
          },
          {
            id: "w5t8",
            title: "Reorganize String",
            description: "Heap Operations",
            url: "https://leetcode.com/problems/reorganize-string/",
          },
          {
            id: "w5t9",
            title: "Meeting Rooms II",
            description: "Heap Operations",
            url: "https://leetcode.com/problems/meeting-rooms-ii/",
          },
          {
            id: "w5t10",
            title: "Minimum Cost to Connect Sticks",
            description: "Heap Operations",
            url: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
          },
          // Priority Queues
          {
            id: "w5t11",
            title: "Merge k Sorted Lists",
            description: "Priority Queues",
            url: "https://leetcode.com/problems/merge-k-sorted-lists/",
          },
          {
            id: "w5t12",
            title: "Kth Smallest Element in a Sorted Matrix",
            description: "Priority Queues",
            url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
          },
          {
            id: "w5t13",
            title: "Find K Pairs with Smallest Sums",
            description: "Priority Queues",
            url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
          },
          { id: "w5t14", title: "IPO", description: "Priority Queues", url: "https://leetcode.com/problems/ipo/" },
          {
            id: "w5t15",
            title: "Sliding Window Median",
            description: "Priority Queues",
            url: "https://leetcode.com/problems/sliding-window-median/",
          },
          // Heap Applications
          {
            id: "w5t16",
            title: "The Skyline Problem",
            description: "Heap Applications",
            url: "https://leetcode.com/problems/the-skyline-problem/",
          },
          {
            id: "w5t17",
            title: "Trapping Rain Water II",
            description: "Heap Applications",
            url: "https://leetcode.com/problems/trapping-rain-water-ii/",
          },
          {
            id: "w5t18",
            title: "Minimum Interval to Include Each Query",
            description: "Heap Applications",
            url: "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
          },
          {
            id: "w5t19",
            title: "Course Schedule III",
            description: "Heap Applications",
            url: "https://leetcode.com/problems/course-schedule-iii/",
          },
          {
            id: "w5t20",
            title: "Maximum Performance of a Team",
            description: "Heap Applications",
            url: "https://leetcode.com/problems/maximum-performance-of-a-team/",
          },
        ],
        practiceLinks: [
          {
            title: "Heap Problems",
            description: "Heap-based algorithm challenges",
            url: "https://leetcode.com/tag/heap-priority-queue/",
          },
          {
            title: "Top K Problems",
            description: "Finding top k elements efficiently",
            url: "https://leetcode.com/problemset/all/?search=top%20k",
          },
        ],
      },
      6: {
        title: "Hash Tables and Sets",
        subtitle: "Fast Lookup Data Structures",
        description:
          "Master hash tables, collision resolution, and their applications in solving algorithmic problems.",
        topics: [
          { title: "Hash Functions", description: "Designing good hash functions and distribution" },
          { title: "Collision Resolution", description: "Chaining and open addressing techniques" },
          { title: "Hash Table Operations", description: "Insert, delete, search with optimal performance" },
          { title: "Applications", description: "Caching, indexing, and duplicate detection" },
        ],
        tasks: [
          // Hash Functions
          {
            id: "w6t1",
            title: "Two Sum",
            description: "Hash Functions",
            url: "https://leetcode.com/problems/two-sum/",
          },
          {
            id: "w6t2",
            title: "Isomorphic Strings",
            description: "Hash Functions",
            url: "https://leetcode.com/problems/isomorphic-strings/",
          },
          {
            id: "w6t3",
            title: "Word Pattern",
            description: "Hash Functions",
            url: "https://leetcode.com/problems/word-pattern/",
          },
          {
            id: "w6t4",
            title: "Happy Number",
            description: "Hash Functions",
            url: "https://leetcode.com/problems/happy-number/",
          },
          {
            id: "w6t5",
            title: "Encode and Decode Strings",
            description: "Hash Functions",
            url: "https://leetcode.com/problems/encode-and-decode-strings/",
          },
          // Collision Resolution
          {
            id: "w6t6",
            title: "Longest Consecutive Sequence",
            description: "Collision Resolution",
            url: "https://leetcode.com/problems/longest-consecutive-sequence/",
          },
          {
            id: "w6t7",
            title: "Group Anagrams",
            description: "Collision Resolution",
            url: "https://leetcode.com/problems/group-anagrams/",
          },
          {
            id: "w6t8",
            title: "Minimum Area Rectangle",
            description: "Collision Resolution",
            url: "https://leetcode.com/problems/minimum-area-rectangle/",
          },
          {
            id: "w6t9",
            title: "Brick Wall",
            description: "Collision Resolution",
            url: "https://leetcode.com/problems/brick-wall/",
          },
          {
            id: "w6t10",
            title: "Subarray Sum Equals K",
            description: "Collision Resolution",
            url: "https://leetcode.com/problems/subarray-sum-equals-k/",
          },
          // Hash Table Operations
          {
            id: "w6t11",
            title: "Insert Delete GetRandom O(1)",
            description: "Hash Table Operations",
            url: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
          },
          {
            id: "w6t12",
            title: "Design HashSet",
            description: "Hash Table Operations",
            url: "https://leetcode.com/problems/design-hashset/",
          },
          {
            id: "w6t13",
            title: "Design HashMap",
            description: "Hash Table Operations",
            url: "https://leetcode.com/problems/design-hashmap/",
          },
          {
            id: "w6t14",
            title: "Logger Rate Limiter",
            description: "Hash Table Operations",
            url: "https://leetcode.com/problems/logger-rate-limiter/",
          },
          {
            id: "w6t15",
            title: "LRU Cache",
            description: "Hash Table Operations",
            url: "https://leetcode.com/problems/lru-cache/",
          },
          // Applications
          {
            id: "w6t16",
            title: "Bulls and Cows",
            description: "Applications",
            url: "https://leetcode.com/problems/bulls-and-cows/",
          },
          {
            id: "w6t17",
            title: "Ransom Note",
            description: "Applications",
            url: "https://leetcode.com/problems/ransom-note/",
          },
          {
            id: "w6t18",
            title: "Find Duplicate File in System",
            description: "Applications",
            url: "https://leetcode.com/problems/find-duplicate-file-in-system/",
          },
          {
            id: "w6t19",
            title: "Jewels and Stones",
            description: "Applications",
            url: "https://leetcode.com/problems/jewels-and-stones/",
          },
          {
            id: "w6t20",
            title: "Number of Boomerangs",
            description: "Applications",
            url: "https://leetcode.com/problems/number-of-boomerangs/",
          },
        ],
        practiceLinks: [
          {
            title: "Hash Table Problems",
            description: "Hashing-based challenges",
            url: "https://leetcode.com/tag/hash-table/",
          },
          {
            title: "Design Problems",
            description: "Data structure design challenges",
            url: "https://leetcode.com/tag/design/",
          },
        ],
      },
      7: {
        title: "Graphs and Graph Algorithms",
        subtitle: "Network and Relationship Modeling",
        description:
          "Explore graph representations and fundamental graph algorithms like BFS, DFS, and shortest paths.",
        topics: [
          { title: "Graph Representations", description: "Adjacency matrix vs adjacency list" },
          { title: "Graph Traversals", description: "Breadth-first search and depth-first search" },
          { title: "Shortest Path Algorithms", description: "Dijkstra's and Bellman-Ford algorithms" },
          { title: "Topological Sorting", description: "Ordering vertices in directed acyclic graphs" },
        ],
        tasks: [
          // Graph Representations
          {
            id: "w7t1",
            title: "Number of Islands",
            description: "Graph Representations",
            url: "https://leetcode.com/problems/number-of-islands/",
          },
          {
            id: "w7t2",
            title: "Clone Graph",
            description: "Graph Representations",
            url: "https://leetcode.com/problems/clone-graph/",
          },
          {
            id: "w7t3",
            title: "Graph Valid Tree",
            description: "Graph Representations",
            url: "https://leetcode.com/problems/graph-valid-tree/",
          },
          {
            id: "w7t4",
            title: "Pacific Atlantic Water Flow",
            description: "Graph Representations",
            url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
          },
          {
            id: "w7t5",
            title: "Redundant Connection",
            description: "Graph Representations",
            url: "https://leetcode.com/problems/redundant-connection/",
          },
          // Graph Traversals
          {
            id: "w7t6",
            title: "Course Schedule",
            description: "Graph Traversals",
            url: "https://leetcode.com/problems/course-schedule/",
          },
          {
            id: "w7t7",
            title: "Course Schedule II",
            description: "Graph Traversals",
            url: "https://leetcode.com/problems/course-schedule-ii/",
          },
          {
            id: "w7t8",
            title: "Reconstruct Itinerary",
            description: "Graph Traversals",
            url: "https://leetcode.com/problems/reconstruct-itinerary/",
          },
          {
            id: "w7t9",
            title: "All Paths From Source to Target",
            description: "Graph Traversals",
            url: "https://leetcode.com/problems/all-paths-from-source-to-target/",
          },
          {
            id: "w7t10",
            title: "Word Ladder",
            description: "Graph Traversals",
            url: "https://leetcode.com/problems/word-ladder/",
          },
          // Shortest Path Algorithms
          {
            id: "w7t11",
            title: "Network Delay Time",
            description: "Shortest Path Algorithms",
            url: "https://leetcode.com/problems/network-delay-time/",
          },
          {
            id: "w7t12",
            title: "Cheapest Flights Within K Stops",
            description: "Shortest Path Algorithms",
            url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
          },
          {
            id: "w7t13",
            title: "Swim in Rising Water",
            description: "Shortest Path Algorithms",
            url: "https://leetcode.com/problems/swim-in-rising-water/",
          },
          {
            id: "w7t14",
            title: "Path with Minimum Effort",
            description: "Shortest Path Algorithms",
            url: "https://leetcode.com/problems/path-with-minimum-effort/",
          },
          {
            id: "w7t15",
            title: "The Maze",
            description: "Shortest Path Algorithms",
            url: "https://leetcode.com/problems/the-maze/",
          },
          // Topological Sorting
          {
            id: "w7t16",
            title: "Alien Dictionary",
            description: "Topological Sorting",
            url: "https://leetcode.com/problems/alien-dictionary/",
          },
          {
            id: "w7t17",
            title: "Minimum Height Trees",
            description: "Topological Sorting",
            url: "https://leetcode.com/problems/minimum-height-trees/",
          },
          {
            id: "w7t18",
            title: "Longest Increasing Path in a Matrix",
            description: "Topological Sorting",
            url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
          },
          {
            id: "w7t19",
            title: "Find Eventual Safe States",
            description: "Topological Sorting",
            url: "https://leetcode.com/problems/find-eventual-safe-states/",
          },
          {
            id: "w7t20",
            title: "Parallel Courses",
            description: "Topological Sorting",
            url: "https://leetcode.com/problems/parallel-courses/",
          },
        ],
        practiceLinks: [
          {
            title: "Graph Problems",
            description: "Graph algorithm challenges",
            url: "https://leetcode.com/tag/graph/",
          },
          {
            title: "BFS Problems",
            description: "Breadth-first search applications",
            url: "https://leetcode.com/tag/breadth-first-search/",
          },
          {
            title: "DFS Problems",
            description: "Depth-first search applications",
            url: "https://leetcode.com/tag/depth-first-search/",
          },
        ],
      },
      8: {
        title: "Dynamic Programming and Advanced Topics",
        subtitle: "Optimization and Complex Algorithms",
        description: "Master dynamic programming techniques and explore advanced algorithmic concepts.",
        topics: [
          { title: "Dynamic Programming Basics", description: "Memoization and tabulation approaches" },
          { title: "Common DP Patterns", description: "Fibonacci, knapsack, longest subsequence problems" },
          { title: "Advanced Algorithms", description: "Greedy algorithms and divide-and-conquer" },
          { title: "Algorithm Analysis", description: "Time and space complexity analysis" },
        ],
        tasks: [
          // Dynamic Programming Basics
          {
            id: "w8t1",
            title: "Climbing Stairs",
            description: "Dynamic Programming Basics",
            url: "https://leetcode.com/problems/climbing-stairs/",
          },
          {
            id: "w8t2",
            title: "Coin Change",
            description: "Dynamic Programming Basics",
            url: "https://leetcode.com/problems/coin-change/",
          },
          {
            id: "w8t3",
            title: "House Robber",
            description: "Dynamic Programming Basics",
            url: "https://leetcode.com/problems/house-robber/",
          },
          {
            id: "w8t4",
            title: "Maximum Subarray",
            description: "Dynamic Programming Basics",
            url: "https://leetcode.com/problems/maximum-subarray/",
          },
          {
            id: "w8t5",
            title: "Unique Paths",
            description: "Dynamic Programming Basics",
            url: "https://leetcode.com/problems/unique-paths/",
          },
          // Common DP Patterns
          {
            id: "w8t6",
            title: "Longest Common Subsequence",
            description: "Common DP Patterns",
            url: "https://leetcode.com/problems/longest-common-subsequence/",
          },
          {
            id: "w8t7",
            title: "Longest Increasing Subsequence",
            description: "Common DP Patterns",
            url: "https://leetcode.com/problems/longest-increasing-subsequence/",
          },
          {
            id: "w8t8",
            title: "Word Break",
            description: "Common DP Patterns",
            url: "https://leetcode.com/problems/word-break/",
          },
          {
            id: "w8t9",
            title: "Partition Equal Subset Sum",
            description: "Common DP Patterns",
            url: "https://leetcode.com/problems/partition-equal-subset-sum/",
          },
          {
            id: "w8t10",
            title: "Edit Distance",
            description: "Common DP Patterns",
            url: "https://leetcode.com/problems/edit-distance/",
          },
          // Advanced Algorithms
          {
            id: "w8t11",
            title: "Jump Game",
            description: "Advanced Algorithms",
            url: "https://leetcode.com/problems/jump-game/",
          },
          {
            id: "w8t12",
            title: "Gas Station",
            description: "Advanced Algorithms",
            url: "https://leetcode.com/problems/gas-station/",
          },
          {
            id: "w8t13",
            title: "Merge Intervals",
            description: "Advanced Algorithms",
            url: "https://leetcode.com/problems/merge-intervals/",
          },
          {
            id: "w8t14",
            title: "Non-overlapping Intervals",
            description: "Advanced Algorithms",
            url: "https://leetcode.com/problems/non-overlapping-intervals/",
          },
          {
            id: "w8t15",
            title: "Insert Interval",
            description: "Advanced Algorithms",
            url: "https://leetcode.com/problems/insert-interval/",
          },
          // Algorithm Analysis
          {
            id: "w8t16",
            title: "Best Time to Buy and Sell Stock",
            description: "Algorithm Analysis",
            url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          },
          {
            id: "w8t17",
            title: "Maximum Product Subarray",
            description: "Algorithm Analysis",
            url: "https://leetcode.com/problems/maximum-product-subarray/",
          },
          {
            id: "w8t18",
            title: "Find Minimum in Rotated Sorted Array",
            description: "Algorithm Analysis",
            url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
          },
          {
            id: "w8t19",
            title: "Search in Rotated Sorted Array",
            description: "Algorithm Analysis",
            url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
          },
          {
            id: "w8t20",
            title: "Median of Two Sorted Arrays",
            description: "Algorithm Analysis",
            url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          },
        ],
        practiceLinks: [
          {
            title: "Dynamic Programming",
            description: "DP algorithm challenges",
            url: "https://leetcode.com/tag/dynamic-programming/",
          },
          {
            title: "Greedy Algorithms",
            description: "Greedy approach problems",
            url: "https://leetcode.com/tag/greedy/",
          },
          {
            title: "Advanced Problems",
            description: "Complex algorithmic challenges",
            url: "https://leetcode.com/problemset/all/?difficulty=HARD",
          },
        ],
      },
    }
  }

  // Check if user exists in localStorage
  checkExistingUser() {
    // Always show login view - no auto-login
    this.showView("loginView")
  }

  // Bind event listeners
  bindEvents() {
    // Login form
    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault()
      this.handleLogin()
    })

    // Logout button
    document.getElementById("logoutBtn").addEventListener("click", () => {
      this.handleLogout()
    })

    // Back button
    document.getElementById("backBtn").addEventListener("click", () => {
      this.showView("homeView")
      this.renderWeekCards()
    })
  }

  // Handle user login
  handleLogin() {
    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value.trim()

    if (username && password) {
      // Get all users from localStorage
      const allUsers = JSON.parse(localStorage.getItem("dsaAppUsers") || "{}")

      // Check if user exists
      if (allUsers[username]) {
        // User exists, check password
        if (allUsers[username].password === password) {
          this.currentUser = allUsers[username]
          this.showView("homeView")
          this.updateWelcomeMessage()
          this.renderWeekCards()
        } else {
          alert("Invalid password! Please try again.")
        }
      } else {
        // Create new user
        this.currentUser = {
          username: username,
          password: password,
          progress: {},
          createdAt: new Date().toISOString(),
        }

        // Add user to all users object
        allUsers[username] = this.currentUser
        localStorage.setItem("dsaAppUsers", JSON.stringify(allUsers))

        this.showView("homeView")
        this.updateWelcomeMessage()
        this.renderWeekCards()
      }
    }
  }

  // Handle user logout
  handleLogout() {
    this.currentUser = null
    this.showView("loginView")
    document.getElementById("loginForm").reset()
  }

  // Show specific view
  showView(viewId) {
    document.querySelectorAll(".view").forEach((view) => {
      view.classList.remove("active")
    })
    document.getElementById(viewId).classList.add("active")
  }

  // Update welcome message
  updateWelcomeMessage() {
    if (this.currentUser) {
      document.getElementById("welcomeUser").textContent = `Welcome, ${this.currentUser.username}!`
    }
  }

  // Render week cards on home page
  renderWeekCards() {
    const weeksGrid = document.querySelector(".weeks-grid")
    weeksGrid.innerHTML = ""

    for (let weekNum = 1; weekNum <= 8; weekNum++) {
      const weekData = this.weekData[weekNum]
      const progress = this.getWeekProgress(weekNum)
      const isCompleted = progress.percentage === 100

      const weekCard = document.createElement("div")
      weekCard.className = `week-card ${isCompleted ? "completed" : ""}`
      weekCard.innerHTML = `
                <div class="week-number">Week ${weekNum}</div>
                <div class="week-title">${weekData.title}</div>
                <div class="week-description">${weekData.description}</div>
                <div class="week-progress-bar">
                    <div class="week-progress-fill" style="width: ${progress.percentage}%"></div>
                </div>
                <div class="week-stats">
                    <span>${progress.completed}/${progress.total} tasks completed</span>
                    <span>${progress.percentage}%</span>
                </div>
            `

      weekCard.addEventListener("click", () => {
        this.showWeekDetail(weekNum)
      })

      weeksGrid.appendChild(weekCard)
    }

    this.updateProgressStats()
  }

  // Get progress for a specific week
  getWeekProgress(weekNum) {
    const weekData = this.weekData[weekNum]
    const totalTasks = weekData.tasks.length
    let completedTasks = 0

    if (this.currentUser && this.currentUser.progress) {
      weekData.tasks.forEach((task) => {
        if (this.currentUser.progress[task.id]) {
          completedTasks++
        }
      })
    }

    return {
      total: totalTasks,
      completed: completedTasks,
      percentage: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
    }
  }

  // Update overall progress statistics
  updateProgressStats() {
    let totalTasks = 0
    let completedTasks = 0
    let completedWeeks = 0

    for (let weekNum = 1; weekNum <= 8; weekNum++) {
      const progress = this.getWeekProgress(weekNum)
      totalTasks += progress.total
      completedTasks += progress.completed
      if (progress.percentage === 100) {
        completedWeeks++
      }
    }

    document.getElementById("completedWeeks").textContent = completedWeeks
    document.getElementById("totalTasks").textContent = totalTasks
    document.getElementById("completedTasks").textContent = completedTasks
  }

  // Show week detail view
  showWeekDetail(weekNum) {
    this.currentWeek = weekNum
    const weekData = this.weekData[weekNum]
    const progress = this.getWeekProgress(weekNum)

    // Update week header
    document.getElementById("weekTitle").textContent = `Week ${weekNum}`
    document.getElementById("weekSubtitle").textContent = weekData.title
    document.getElementById("weekDescription").textContent = weekData.description
    document.getElementById("weekProgress").textContent = `${progress.completed}/${progress.total} tasks completed`

    // Render topics
    this.renderTopics(weekData.topics)

    // Render tasks
    this.renderTasks(weekData.tasks)

    // Render practice links
    this.renderPracticeLinks(weekData.practiceLinks)

    this.showView("weekView")
  }

  // Render topics list
  renderTopics(topics) {
    const topicsList = document.getElementById("topicsList")
    topicsList.innerHTML = ""

    topics.forEach((topic) => {
      const topicItem = document.createElement("div")
      topicItem.className = "topic-item"
      topicItem.innerHTML = `
                <h4>${topic.title}</h4>
                <p>${topic.description}</p>
            `
      topicsList.appendChild(topicItem)
    })
  }

  // Render tasks list
  renderTasks(tasks) {
    const tasksList = document.getElementById("tasksList")
    tasksList.innerHTML = ""

    // Group tasks by topic
    const tasksByTopic = {}
    tasks.forEach((task) => {
      if (!tasksByTopic[task.description]) {
        tasksByTopic[task.description] = []
      }
      tasksByTopic[task.description].push(task)
    })

    // Render tasks grouped by topic
    Object.keys(tasksByTopic).forEach((topic) => {
      // Add topic header
      const topicHeader = document.createElement("div")
      topicHeader.className = "topic-header"
      topicHeader.innerHTML = `<h4>${topic}</h4>`
      tasksList.appendChild(topicHeader)

      // Render tasks for this topic
      tasksByTopic[topic].forEach((task) => {
        const isCompleted = this.currentUser && this.currentUser.progress && this.currentUser.progress[task.id]

        const taskItem = document.createElement("div")
        taskItem.className = `task-item ${isCompleted ? "completed" : ""}`
        taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" data-task-id="${task.id}" ${isCompleted ? "checked" : ""}>
        <div class="task-content">
          <div class="task-title">
            <a href="${task.url}" target="_blank" rel="noopener noreferrer">${task.title}</a>
          </div>
        </div>
      `

        // Add event listener for checkbox
        const checkbox = taskItem.querySelector(".task-checkbox")
        checkbox.addEventListener("change", (e) => {
          this.toggleTaskCompletion(task.id, e.target.checked)
        })

        tasksList.appendChild(taskItem)
      })
    })
  }

  // Render practice links
  renderPracticeLinks(practiceLinks) {
    const practiceLinksContainer = document.getElementById("practiceLinks")
    practiceLinksContainer.innerHTML = ""

    practiceLinks.forEach((link) => {
      const linkElement = document.createElement("a")
      linkElement.className = "practice-link"
      linkElement.href = link.url
      linkElement.target = "_blank"
      linkElement.rel = "noopener noreferrer"
      linkElement.innerHTML = `
                <i class="fas fa-external-link-alt"></i>
                <div class="practice-link-content">
                    <h4>${link.title}</h4>
                    <p>${link.description}</p>
                </div>
            `
      practiceLinksContainer.appendChild(linkElement)
    })
  }

  // Toggle task completion status
  toggleTaskCompletion(taskId, isCompleted) {
    if (!this.currentUser.progress) {
      this.currentUser.progress = {}
    }

    if (isCompleted) {
      this.currentUser.progress[taskId] = {
        completed: true,
        completedAt: new Date().toISOString(),
      }
    } else {
      delete this.currentUser.progress[taskId]
    }

    // Save updated user data to localStorage
    const allUsers = JSON.parse(localStorage.getItem("dsaAppUsers") || "{}")
    allUsers[this.currentUser.username] = this.currentUser
    localStorage.setItem("dsaAppUsers", JSON.stringify(allUsers))

    // Update UI
    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`).closest(".task-item")
    if (isCompleted) {
      taskItem.classList.add("completed")
    } else {
      taskItem.classList.remove("completed")
    }

    // Update progress display
    const progress = this.getWeekProgress(this.currentWeek)
    document.getElementById("weekProgress").textContent = `${progress.completed}/${progress.total} tasks completed`
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new DSAApp()
})

// Add some utility functions for enhanced UX
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling for better UX
  document.documentElement.style.scrollBehavior = "smooth"

  // Add keyboard navigation support
  document.addEventListener("keydown", (e) => {
    // ESC key to go back
    if (e.key === "Escape") {
      const backBtn = document.getElementById("backBtn")
      if (backBtn && backBtn.offsetParent !== null) {
        backBtn.click()
      }
    }
  })

  // Add loading states for better perceived performance
  const addLoadingState = (element) => {
    const originalText = element.textContent
    element.innerHTML = '<span class="loading"></span> Loading...'

    setTimeout(() => {
      element.textContent = originalText
    }, 500)
  }

  // Enhanced form validation
  const inputs = document.querySelectorAll("input[required]")
  inputs.forEach((input) => {
    input.addEventListener("invalid", (e) => {
      e.preventDefault()
      input.classList.add("error")

      setTimeout(() => {
        input.classList.remove("error")
      }, 3000)
    })
  })
})
