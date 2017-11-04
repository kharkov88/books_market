    
        <div className="content">
            <Route exact path="/" component={About}/>
            <Route exact path={`/магазин`} component={(match)=><List match={match} list={list} actions={actions}/>}/>
            <Route 
                path={`/магазин/:productId`}
                component={(match)=>(
                    <Product 
                        match={match}
                        list={list}
                        activeID={activeID}
                        actions={actions}
                        updateResult={updateResult}
                    />)}
            />
            <Route path={`/добавить`} component={()=><AddForm onSubmit={showResults} />}/>
        </div>