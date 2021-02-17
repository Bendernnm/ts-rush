type TreeNode = {
    value: string,
};

type LeafNode = TreeNode & {
    isLeaf: true,
};

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode],
};

type NodeMapperFunction = (value: string) => string;

const treeA: TreeNode = { value: 'a' };
const treeB: LeafNode = { value: 'b', isLeaf: true };
const treeC: InnerNode = { value: 'c', children: [treeB] };

function mapTreeNode<T extends TreeNode>(node: T, cb: (value: string) => string): T {
    return {
        ...node,
        value: cb(node.value),
    };
}

const nodeMapperUpperCase : NodeMapperFunction = value => value.toUpperCase();

const mapTreeNodeA = mapTreeNode(treeA, nodeMapperUpperCase);
const mapTreeNodeB = mapTreeNode(treeB, nodeMapperUpperCase);
const mapTreeNodeC = mapTreeNode(treeC, nodeMapperUpperCase);

console.log(mapTreeNodeA);
console.log(mapTreeNodeB);
console.log(mapTreeNodeC);
