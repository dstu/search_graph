var searchIndex = {};
searchIndex["search_graph"] = {"doc":"","items":[[3,"ChildList","search_graph","A traversible list of a vertex&#39;s outgoing edges.",null,null],[3,"ChildListIter","","",null,null],[3,"Edge","","Immutable handle to a graph edge (&quot;edge handle&quot;).",null,null],[3,"Node","","Immutable handle to a graph vertex (&quot;node handle&quot;).",null,null],[3,"ParentList","","A traversible list of a vertex&#39;s incoming edges.",null,null],[3,"ParentListIter","","",null,null],[3,"EdgeExpander","","Modifies graph topology by connecting an unexpanded edge to its target\nvertex.",null,null],[3,"MutChildList","","A traversible list of a vertex&#39;s outgoing edges.",null,null],[3,"MutEdge","","Mutable handle to a graph edge (&quot;edge handle&quot;).",null,null],[3,"MutNode","","Mutable handle to a graph vertex (&quot;node handle&quot;).",null,null],[3,"MutParentList","","A traversible list of a vertex&#39;s incoming edges.",null,null],[3,"Graph","","A search graph.",null,null],[4,"Target","","The target of an outgoing graph edge.",null,null],[13,"Unexpanded","","Edge has not yet been expanded.",0,null],[13,"Expanded","","Edge has been expanded and was the expanded edge that lead to the game\nstate which it points to. The target of this edge will have a\nbackpointer to this edge&#39;s source in its parent list.",0,null],[11,"get_id","","Returns an immutable ID that is guaranteed to identify this vertex\nuniquely within its graph. This ID may change when the graph is mutated.",1,{"inputs":[{"name":"node"}],"output":{"name":"usize"}}],[11,"get_data","","Returns the data at this vertex.",1,{"inputs":[{"name":"node"}],"output":{"name":"s"}}],[11,"is_leaf","","Returns true iff this vertex has no outgoing edges (regardless of\nwhether they are expanded).",1,{"inputs":[{"name":"node"}],"output":{"name":"bool"}}],[11,"is_root","","Returns true iff this vertex has no incoming edges.",1,{"inputs":[{"name":"node"}],"output":{"name":"bool"}}],[11,"get_child_list","","Returns a traversible list of outgoing edges.",1,{"inputs":[{"name":"node"}],"output":{"name":"childlist"}}],[11,"get_parent_list","","Returns a traversible list of incoming edges.",1,{"inputs":[{"name":"node"}],"output":{"name":"parentlist"}}],[11,"len","","Returns the number of edges.",2,{"inputs":[{"name":"childlist"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true iff there are no outgoing edges.",2,{"inputs":[{"name":"childlist"}],"output":{"name":"bool"}}],[11,"get_source_node","","Returns a node handle for the vertex these edges originate from.",2,{"inputs":[{"name":"childlist"}],"output":{"name":"node"}}],[11,"get_edge","","Returns an edge handle for the `i`th edge.",2,{"inputs":[{"name":"childlist"},{"name":"usize"}],"output":{"name":"edge"}}],[11,"iter","","Returns an iterator over child edges.",2,{"inputs":[{"name":"childlist"}],"output":{"name":"childlistiter"}}],[11,"next","","",3,{"inputs":[{"name":"childlistiter"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"len","","Returns the number of edges.",4,{"inputs":[{"name":"parentlist"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true iff there are no incoming edges.",4,{"inputs":[{"name":"parentlist"}],"output":{"name":"bool"}}],[11,"target_node","","Returns a node handle for the vertex these edges point to.",4,{"inputs":[{"name":"parentlist"}],"output":{"name":"node"}}],[11,"get_edge","","Returns an edge handle for the `i`th edge.",4,{"inputs":[{"name":"parentlist"},{"name":"usize"}],"output":{"name":"edge"}}],[11,"iter","","Returns an iterator over parent edges.",4,{"inputs":[{"name":"parentlist"}],"output":{"name":"parentlistiter"}}],[11,"next","","",5,{"inputs":[{"name":"parentlistiter"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"get_id","","Returns an immutable ID that is guaranteed to identify this edge\nuniquely within its graph.  This ID may change when the graph is\nmutated.",6,{"inputs":[{"name":"edge"}],"output":{"name":"usize"}}],[11,"get_data","","Returns the data at this edge.",6,{"inputs":[{"name":"edge"}],"output":{"name":"a"}}],[11,"get_source","","Returns a node handle for this edge&#39;s source vertex.",6,{"inputs":[{"name":"edge"}],"output":{"name":"node"}}],[11,"get_target","","Returns the target of this edge. If the edge is unexpanded, no data will\nbe available. If it is expanded, a node handle will be available.",6,{"inputs":[{"name":"edge"}],"output":{"name":"target"}}],[11,"get_id","","Returns an immutable ID that is guaranteed to identify this vertex\nuniquely within its graph. This ID may change when the graph is mutated.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"usize"}}],[11,"get_data","","Returns the data at this vertex.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"s"}}],[11,"get_data_mut","","Returns the data at this vertex, mutably.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"s"}}],[11,"is_leaf","","Returns true iff this vertex has no outgoing edges (regardless of\nwhether they are expanded).",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"bool"}}],[11,"is_root","","Returns true iff this vertex has no incoming edges.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"bool"}}],[11,"get_child_list","","Returns a traversible list of outgoing edges. Its lifetime will be\nlimited to a local borrow of `self`.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"childlist"}}],[11,"get_child_list_mut","","Returns a traversible list of outgoing edges. Its lifetime will be\nlimited to a local borrow of `self`.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"mutchildlist"}}],[11,"to_child_list","","Returns a traversible list of outgoing edges. `self` is consumed, and\nthe return value&#39;s lifetime will be the same as that of `self`.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"mutchildlist"}}],[11,"get_parent_list","","Returns a traversible list of incoming edges. Its lifetime will be\nlimited to a local borrow of `self`.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"parentlist"}}],[11,"get_parent_list_mut","","Returns a traversible list of incoming edges. Its lifetime will be\nlimited to a local borrow of `self`.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"mutparentlist"}}],[11,"to_parent_list","","Returns a traversible list of outgoing edges. `self` is consumed, and\nthe return value&#39;s lifetime will be the same as that of `self`.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"mutparentlist"}}],[11,"to_node","","Returns a non-mutating node obtained by converting this node. `self` is\nconsumed, and the return value&#39;s lifetime will be the same as that of\n`self`. The source graph is still considered to have a mutable borrow in\nplay, but the resulting node can be cloned freely.",7,{"inputs":[{"name":"mutnode"}],"output":{"name":"node"}}],[11,"len","","Returns the number of outgoing eges.",8,{"inputs":[{"name":"mutchildlist"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true iff there are no outgoing edges.",8,{"inputs":[{"name":"mutchildlist"}],"output":{"name":"bool"}}],[11,"get_edge","","Returns an edge handle for the `i`th edge.",8,{"inputs":[{"name":"mutchildlist"},{"name":"usize"}],"output":{"name":"edge"}}],[11,"get_edge_mut","","Returns an edge handle for the `i`th edge. Its lifetime will be limited\nto a local borrow of `self`.",8,{"inputs":[{"name":"mutchildlist"},{"name":"usize"}],"output":{"name":"mutedge"}}],[11,"to_edge","","Returns an edge handle for the `i`th `self` is consumed, and the return\nvalue&#39;s lifetime will be the same as that of `self`.",8,{"inputs":[{"name":"mutchildlist"},{"name":"usize"}],"output":{"name":"mutedge"}}],[11,"get_source_node","","Returns a node handle for the vertex these edges originate from. Its\nlifetime will be limited to a local borrow of `self`.",8,{"inputs":[{"name":"mutchildlist"}],"output":{"name":"node"}}],[11,"get_source_node_mut","","Returns a mutable node handle for the vertex these edges originate\nfrom. Its lifetime will be limited to a local borrow of `self`.",8,{"inputs":[{"name":"mutchildlist"}],"output":{"name":"mutnode"}}],[11,"to_source_node","","Returns a mutable node handle for the vertex these edges originate\nfrom. `self` is consumed, and the return value&#39;s lifetime will be the\nsame as that of `self`.",8,{"inputs":[{"name":"mutchildlist"}],"output":{"name":"mutnode"}}],[11,"iter","","Returns an iterator over child edges.",8,{"inputs":[{"name":"mutchildlist"}],"output":{"name":"childlistiter"}}],[11,"add_child","","Appends an unexpanded edge to this list of children and returns a mutable handle to\nit. Its lifetime will be limited to a local borrow of `self`.",8,{"inputs":[{"name":"mutchildlist"},{"name":"a"}],"output":{"name":"mutedge"}}],[11,"to_add","","Appends unexpanded an edge to the vertex&#39;s&#39; children and returns a\nmutable handle to it. `self` will be consumed, and the return value&#39;s\nlifetime will be equal to that of `self`.",8,{"inputs":[{"name":"mutchildlist"},{"name":"a"}],"output":{"name":"mutedge"}}],[11,"len","","Returns the number of incoming edges.",9,{"inputs":[{"name":"mutparentlist"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true iff there are no incoming edges.",9,{"inputs":[{"name":"mutparentlist"}],"output":{"name":"bool"}}],[11,"get_target_node","","Returns a node handle for the vertex these edges originate terminate\non. Its lifetime will be limited to a local borrow of `self`.",9,{"inputs":[{"name":"mutparentlist"}],"output":{"name":"node"}}],[11,"get_target_node_mut","","Returns a mutable node handle for the vertex these edges terminate\non. Its lifetime will be limited to a local borrow of `self`.",9,{"inputs":[{"name":"mutparentlist"}],"output":{"name":"mutnode"}}],[11,"to_target_node","","Returns a mutable node handle for the vertex these edges terminate\non. `self` is consumed, and the return value&#39;s lifetime will be the same\nas that of `self`.",9,{"inputs":[{"name":"mutparentlist"}],"output":{"name":"mutnode"}}],[11,"get_edge","","Returns a handle to the `i`th edge. Its lifetime will be limited to a\nlocal borrow of `self`.",9,{"inputs":[{"name":"mutparentlist"},{"name":"usize"}],"output":{"name":"edge"}}],[11,"get_edge_mut","","Returns a mutable handle to the `i`th edge. Its lifetime will be limited\nto a local borrow of `self`.",9,{"inputs":[{"name":"mutparentlist"},{"name":"usize"}],"output":{"name":"mutedge"}}],[11,"to_edge","","Returns a mutable handle to the `i`th edge. `self` is consumed, and the\nreturn value&#39;s lifetime will be the same as that of `self`.",9,{"inputs":[{"name":"mutparentlist"},{"name":"usize"}],"output":{"name":"mutedge"}}],[11,"iter","","Returns an iterator over parent edges.",9,{"inputs":[{"name":"mutparentlist"}],"output":{"name":"parentlistiter"}}],[11,"get_id","","Returns an immutable ID that is guaranteed to identify this vertex\nuniquely within its graph. This ID may change when the graph is mutated.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"usize"}}],[11,"get_data","","Returns the data at this edge.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"a"}}],[11,"get_data_mut","","Returns the data at this edge, mutably.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"a"}}],[11,"get_target","","Returns the target of this edge. If the edge is unexpanded, no data will\nbe available. If it is expanded, a node handle will be available, with\nits lifetime limited to a local borrow of `self`.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"target"}}],[11,"get_target_mut","","Returns the target of this edge. If the edge is unexpanded, an\n`EdgeExpander` will be provided. If it is expanded, a mutable node\nhandle will be available. In both cases, lifetimes will be limited to a\nlocal borrow of `self`.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"target"}}],[11,"to_target","","Returns the target of this edge. If the edge is unexpanded, an\n`EdgeExpander` will be provided. If it is expanded, a mutable node\nhandle will be available. In both cases `self` is consumed, and the\nreturn value&#39;s lifetime will be the same as that of `self`.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"target"}}],[11,"get_source","","Returns a node handle for the source of this edge. Its lifetime will be\nlimited to a local borrow of `self`.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"node"}}],[11,"get_source_mut","","Returns a mutable node handle for the source of this edge. Its lifetime\nwill be limited to a local borrow of `self`.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"mutnode"}}],[11,"to_source","","Returns a mutable node handle for the source of this edge. `self` is\nconsumed, and the return value&#39;s lifetime will be equal to that of\n`self`.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"mutnode"}}],[11,"to_edge","","Returns a non-mutating edge obtained by converting this edge. `self` is\nconsumed, and the return value&#39;s lifetime will be the same as that of\n`self`. The source graph is still considered to have a mutable borrow in\nplay, but the resulting edge can be cloned freely.",10,{"inputs":[{"name":"mutedge"}],"output":{"name":"edge"}}],[11,"get_edge","","Returns an edge handle for the edge that this expander would expand. Its\nlifetime will be limited to a local borrow of `self`.",11,{"inputs":[{"name":"edgeexpander"}],"output":{"name":"edge"}}],[11,"get_edge_mut","","Returns a mutable edge handle for the edge that this expander would\nexpand. Its lifetime will be limited to a local borrow of `self`.",11,{"inputs":[{"name":"edgeexpander"}],"output":{"name":"mutedge"}}],[11,"to_edge","","Returns a mutable edge handle for the edge that this expander would\nexpand. `self` is consumed, and the return value&#39;s lifetime will be the\nsame as that of `self`.",11,{"inputs":[{"name":"edgeexpander"}],"output":{"name":"mutedge"}}],[11,"expand_to_edge","","Expands this expander&#39;s edge, by connecting to the vertex associated\nwith the game state `state`.",11,{"inputs":[{"name":"edgeexpander"},{"name":"t"},{"name":"g"}],"output":{"name":"mutedge"}}],[11,"expand_to_target","","Expands this expander&#39;s edge, by connecting to the vertex associated\nwith the game state `state`.",11,{"inputs":[{"name":"edgeexpander"},{"name":"t"},{"name":"g"}],"output":{"name":"mutnode"}}],[11,"new","","Creates an empty `Graph` with no vertices or edges.",12,{"inputs":[],"output":{"name":"self"}}],[11,"get_node","","Gets a node handle for the given game state.",12,{"inputs":[{"name":"graph"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_node_mut","","Gets a mutable node handle for the given game state.",12,{"inputs":[{"name":"graph"},{"name":"t"}],"output":{"name":"option"}}],[11,"add_root","","Adds a root vertex (one with no parents) for the given game state and\ndata and returns a mutable handle for it.",12,{"inputs":[{"name":"graph"},{"name":"t"},{"name":"s"}],"output":{"name":"mutnode"}}],[11,"fmt","","",0,{"inputs":[{"name":"target"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"target"}],"output":{"name":"target"}}]],"paths":[[4,"Target"],[3,"Node"],[3,"ChildList"],[3,"ChildListIter"],[3,"ParentList"],[3,"ParentListIter"],[3,"Edge"],[3,"MutNode"],[3,"MutChildList"],[3,"MutParentList"],[3,"MutEdge"],[3,"EdgeExpander"],[3,"Graph"]]};
initSearch(searchIndex);
